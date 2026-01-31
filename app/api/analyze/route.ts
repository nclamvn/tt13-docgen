// app/api/analyze/route.ts

import { auth } from '@/lib/auth'
import { createAIService, createSystemAIService } from '@/lib/ai/ai-service'
import { TT13_ANALYZE_PROMPT, buildAnalyzePrompt } from '@/lib/ai/prompts/tt13-optimized'
import { parseAnalyzeResult, AnalyzeResult } from '@/lib/ai/validation'

export async function POST(req: Request) {
  try {
    const { content } = await req.json()

    // Validate input
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return Response.json(
        { error: 'No content provided for analysis' },
        { status: 400 }
      )
    }

    // Limit content length to prevent token overflow
    const maxContentLength = 50000 // ~12,500 tokens approximately
    const trimmedContent = content.length > maxContentLength
      ? content.substring(0, maxContentLength) + '\n\n[...content truncated...]'
      : content

    // Get user session for AI service
    const session = await auth()
    const userId = session?.user?.id

    // Create AI service with user's API keys if available
    const aiService = userId
      ? createAIService(userId)
      : createSystemAIService()

    // Build prompts
    const systemPrompt = TT13_ANALYZE_PROMPT
    const userPrompt = buildAnalyzePrompt(trimmedContent)

    // Generate and validate analyze result
    const extractedData = await aiService.generateJSON<AnalyzeResult>(
      userPrompt,
      systemPrompt,
      parseAnalyzeResult
    )

    return Response.json({
      data: extractedData,
      meta: {
        contentLength: content.length,
        truncated: content.length > maxContentLength
      }
    })
  } catch (error) {
    console.error('Analyze API error:', error)

    const errorMessage = error instanceof Error ? error.message : 'Unknown error'

    // Determine appropriate status code
    let status = 500
    if (errorMessage.includes('No AI provider available')) {
      status = 503
    } else if (errorMessage.includes('Invalid analyze result')) {
      status = 422 // Unprocessable Entity - AI returned invalid data
    }

    return Response.json(
      {
        error: 'Failed to analyze content',
        details: errorMessage
      },
      { status }
    )
  }
}
