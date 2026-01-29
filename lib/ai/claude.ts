// lib/ai/claude.ts

import Anthropic from '@anthropic-ai/sdk'

if (!process.env.ANTHROPIC_API_KEY) {
  console.warn('ANTHROPIC_API_KEY is not set')
}

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || ''
})

export const AI_MODEL = 'claude-sonnet-4-20250514'
export const MAX_TOKENS = 4096

export async function createChatCompletion(
  systemPrompt: string,
  messages: { role: 'user' | 'assistant'; content: string }[]
) {
  const stream = await anthropic.messages.stream({
    model: AI_MODEL,
    max_tokens: MAX_TOKENS,
    system: systemPrompt,
    messages: messages,
  })

  return stream
}

export async function createCompletion(
  systemPrompt: string,
  userPrompt: string
) {
  const response = await anthropic.messages.create({
    model: AI_MODEL,
    max_tokens: MAX_TOKENS,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  })

  const textBlock = response.content.find((block) => block.type === 'text')
  return textBlock ? textBlock.text : ''
}

export async function streamCompletion(
  systemPrompt: string,
  userPrompt: string
) {
  const stream = await anthropic.messages.stream({
    model: AI_MODEL,
    max_tokens: MAX_TOKENS,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  })

  return stream.toReadableStream()
}
