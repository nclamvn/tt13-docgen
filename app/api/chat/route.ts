// app/api/chat/route.ts

import { auth } from '@/lib/auth'
import { createAIService, createSystemAIService } from '@/lib/ai/ai-service'
import { buildChatSystemPrompt } from '@/lib/ai/prompts/tt13-optimized'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ProjectContext {
  step?: string
  files?: string[]
  config?: {
    name?: string
    clientName?: string
    stages?: number[]
  }
}

export async function POST(req: Request) {
  try {
    // Authentication required for chat
    const session = await auth()
    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }

    const userId = session.user.id
    const { messages, projectContext } = await req.json() as {
      messages: ChatMessage[]
      projectContext?: ProjectContext
    }

    // Validate messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response('Messages array is required', { status: 400 })
    }

    // Create AI service with user's API keys
    const aiService = userId
      ? createAIService(userId)
      : createSystemAIService()

    // Build system prompt with project context
    const systemPrompt = buildChatSystemPrompt(projectContext)

    // Get readable stream for response
    const readableStream = await aiService.getReadableStream(
      '', // prompt not used when messages are provided
      systemPrompt,
      messages
    )

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      }
    })
  } catch (error) {
    console.error('Chat API error:', error)

    const errorMessage = error instanceof Error ? error.message : 'Unknown error'

    // Return appropriate error response
    if (errorMessage.includes('No AI provider available')) {
      return new Response('No AI provider available. Please configure an API key.', { status: 503 })
    }

    return new Response('Internal Server Error', { status: 500 })
  }
}
