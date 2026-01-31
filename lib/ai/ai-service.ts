// lib/ai/ai-service.ts

import Anthropic from '@anthropic-ai/sdk'
import OpenAI from 'openai'
import { getApiKey } from '@/lib/api-keys'
import type { ApiProvider } from '@/types/api-keys'

// ============================================
// Configuration
// ============================================

export const AI_CONFIG = {
  anthropic: {
    model: 'claude-sonnet-4-20250514',
    maxTokens: 4096
  },
  openai: {
    model: 'gpt-4o',
    maxTokens: 4096
  }
} as const

export interface AIServiceConfig {
  userId?: string
  maxRetries?: number
  baseDelay?: number // in milliseconds
}

interface AIProvider {
  name: ApiProvider
  generate(prompt: string, systemPrompt: string): Promise<string>
  stream(prompt: string, systemPrompt: string, messages?: Array<{ role: 'user' | 'assistant'; content: string }>): AsyncIterable<string>
}

// ============================================
// Provider Implementations
// ============================================

class AnthropicProvider implements AIProvider {
  name: ApiProvider = 'anthropic'
  private client: Anthropic

  constructor(apiKey: string) {
    this.client = new Anthropic({ apiKey })
  }

  async generate(prompt: string, systemPrompt: string): Promise<string> {
    const response = await this.client.messages.create({
      model: AI_CONFIG.anthropic.model,
      max_tokens: AI_CONFIG.anthropic.maxTokens,
      system: systemPrompt,
      messages: [{ role: 'user', content: prompt }]
    })

    const textBlock = response.content.find(block => block.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text response from Anthropic')
    }

    return textBlock.text
  }

  async *stream(
    prompt: string,
    systemPrompt: string,
    messages?: Array<{ role: 'user' | 'assistant'; content: string }>
  ): AsyncIterable<string> {
    const streamMessages = messages || [{ role: 'user' as const, content: prompt }]

    const stream = await this.client.messages.stream({
      model: AI_CONFIG.anthropic.model,
      max_tokens: AI_CONFIG.anthropic.maxTokens,
      system: systemPrompt,
      messages: streamMessages
    })

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        yield event.delta.text
      }
    }
  }
}

class OpenAIProvider implements AIProvider {
  name: ApiProvider = 'openai'
  private client: OpenAI

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey })
  }

  async generate(prompt: string, systemPrompt: string): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: AI_CONFIG.openai.model,
      max_tokens: AI_CONFIG.openai.maxTokens,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ]
    })

    const content = response.choices[0]?.message?.content
    if (!content) {
      throw new Error('No response from OpenAI')
    }

    return content
  }

  async *stream(
    prompt: string,
    systemPrompt: string,
    messages?: Array<{ role: 'user' | 'assistant'; content: string }>
  ): AsyncIterable<string> {
    const chatMessages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: systemPrompt }
    ]

    if (messages) {
      chatMessages.push(...messages)
    } else {
      chatMessages.push({ role: 'user', content: prompt })
    }

    const stream = await this.client.chat.completions.create({
      model: AI_CONFIG.openai.model,
      max_tokens: AI_CONFIG.openai.maxTokens,
      messages: chatMessages,
      stream: true
    })

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content
      if (content) {
        yield content
      }
    }
  }
}

// ============================================
// Error Handling
// ============================================

interface RetryableError {
  status?: number
  code?: string
  message?: string
}

function isRetryableError(error: unknown): boolean {
  const err = error as RetryableError

  // Rate limit errors
  if (err.status === 429) return true

  // Service unavailable
  if (err.status === 503) return true

  // Server errors (500-599) - retry once
  if (err.status && err.status >= 500 && err.status < 600) return true

  // Network errors
  if (err.code === 'ECONNRESET' || err.code === 'ETIMEDOUT' || err.code === 'ENOTFOUND') return true

  // OpenAI specific
  if (err.message?.includes('Request timed out')) return true

  return false
}

function isAuthenticationError(error: unknown): boolean {
  const err = error as RetryableError
  return err.status === 401 || err.status === 403
}

// ============================================
// AI Service Class
// ============================================

export class AIService {
  private userId?: string
  private maxRetries: number
  private baseDelay: number

  constructor(config: AIServiceConfig = {}) {
    this.userId = config.userId
    this.maxRetries = config.maxRetries ?? 3
    this.baseDelay = config.baseDelay ?? 1000
  }

  /**
   * Build provider chain in priority order:
   * 1. User's Anthropic key
   * 2. User's OpenAI key
   * 3. System Anthropic key (fallback)
   */
  private async getProviderChain(): Promise<AIProvider[]> {
    const providers: AIProvider[] = []

    if (this.userId) {
      // Try user's Anthropic key first
      const anthropicKey = await getApiKey(this.userId, 'anthropic')
      if (anthropicKey) {
        providers.push(new AnthropicProvider(anthropicKey))
      }

      // Then user's OpenAI key
      const openaiKey = await getApiKey(this.userId, 'openai')
      if (openaiKey) {
        providers.push(new OpenAIProvider(openaiKey))
      }
    }

    // System Anthropic key as last resort
    if (process.env.ANTHROPIC_API_KEY) {
      // Only add if not already added from user keys
      const hasAnthropicProvider = providers.some(p => p.name === 'anthropic')
      if (!hasAnthropicProvider) {
        providers.push(new AnthropicProvider(process.env.ANTHROPIC_API_KEY))
      }
    }

    return providers
  }

  /**
   * Exponential backoff delay
   */
  private async delay(attempt: number): Promise<void> {
    const delay = this.baseDelay * Math.pow(2, attempt)
    const jitter = Math.random() * 0.1 * delay // Add 10% jitter
    await new Promise(resolve => setTimeout(resolve, delay + jitter))
  }

  /**
   * Generate content with retry and fallback
   */
  async generateContent(prompt: string, systemPrompt: string): Promise<string> {
    const providers = await this.getProviderChain()

    if (providers.length === 0) {
      throw new Error('No AI provider available. Please configure an API key.')
    }

    const errors: Array<{ provider: string; error: string }> = []

    for (const provider of providers) {
      for (let attempt = 0; attempt < this.maxRetries; attempt++) {
        try {
          console.log(`[AIService] Attempting ${provider.name}, attempt ${attempt + 1}/${this.maxRetries}`)
          const result = await provider.generate(prompt, systemPrompt)
          console.log(`[AIService] Success with ${provider.name}`)
          return result
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error'
          console.error(`[AIService] ${provider.name} attempt ${attempt + 1} failed:`, errorMessage)

          // Don't retry auth errors - skip to next provider
          if (isAuthenticationError(error)) {
            errors.push({ provider: provider.name, error: `Authentication failed: ${errorMessage}` })
            break
          }

          // Retry if retryable and not last attempt
          if (isRetryableError(error) && attempt < this.maxRetries - 1) {
            await this.delay(attempt)
            continue
          }

          errors.push({ provider: provider.name, error: errorMessage })
          break
        }
      }
    }

    // All providers failed
    const errorSummary = errors.map(e => `${e.provider}: ${e.error}`).join('; ')
    throw new Error(`All AI providers failed: ${errorSummary}`)
  }

  /**
   * Generate and validate JSON response
   */
  async generateJSON<T>(
    prompt: string,
    systemPrompt: string,
    parser: (text: string) => T
  ): Promise<T> {
    const text = await this.generateContent(prompt, systemPrompt)
    return parser(text)
  }

  /**
   * Stream content with fallback (returns first successful provider's stream)
   */
  async *streamContent(
    prompt: string,
    systemPrompt: string,
    messages?: Array<{ role: 'user' | 'assistant'; content: string }>
  ): AsyncIterable<string> {
    const providers = await this.getProviderChain()

    if (providers.length === 0) {
      throw new Error('No AI provider available. Please configure an API key.')
    }

    const errors: Array<{ provider: string; error: string }> = []

    for (const provider of providers) {
      try {
        console.log(`[AIService] Streaming with ${provider.name}`)
        for await (const chunk of provider.stream(prompt, systemPrompt, messages)) {
          yield chunk
        }
        return // Success, exit after streaming
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        console.error(`[AIService] ${provider.name} stream failed:`, errorMessage)
        errors.push({ provider: provider.name, error: errorMessage })

        // Authentication error - try next provider
        if (isAuthenticationError(error)) {
          continue
        }

        // Non-retryable error - try next provider
        continue
      }
    }

    // All providers failed
    const errorSummary = errors.map(e => `${e.provider}: ${e.error}`).join('; ')
    throw new Error(`All AI providers failed to stream: ${errorSummary}`)
  }

  /**
   * Get a readable stream for HTTP response (streaming)
   */
  async getReadableStream(
    prompt: string,
    systemPrompt: string,
    messages?: Array<{ role: 'user' | 'assistant'; content: string }>
  ): Promise<ReadableStream<Uint8Array>> {
    const encoder = new TextEncoder()
    const streamIterable = this.streamContent(prompt, systemPrompt, messages)

    return new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of streamIterable) {
            controller.enqueue(encoder.encode(chunk))
          }
          controller.close()
        } catch (error) {
          controller.error(error)
        }
      }
    })
  }
}

// ============================================
// Factory Functions
// ============================================

/**
 * Create AI service for authenticated user
 */
export function createAIService(userId?: string, config?: Omit<AIServiceConfig, 'userId'>): AIService {
  return new AIService({ userId, ...config })
}

/**
 * Create AI service with system key only (for unauthenticated requests)
 */
export function createSystemAIService(config?: Omit<AIServiceConfig, 'userId'>): AIService {
  return new AIService({ ...config })
}
