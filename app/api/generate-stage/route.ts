// app/api/generate-stage/route.ts

import { auth } from '@/lib/auth'
import { createAIService, createSystemAIService } from '@/lib/ai/ai-service'
import { TT13_STAGE_PROMPT, buildStagePrompt, STAGE_NAMES } from '@/lib/ai/prompts/tt13-optimized'
import { parseStageData, StageData } from '@/lib/ai/validation'

export async function POST(req: Request) {
  try {
    const { projectInfo, stageNumber } = await req.json()

    // Validate input
    if (!projectInfo || typeof projectInfo !== 'object') {
      return Response.json(
        { error: 'Missing or invalid projectInfo' },
        { status: 400 }
      )
    }

    if (!stageNumber || typeof stageNumber !== 'number' || stageNumber < 1 || stageNumber > 7) {
      return Response.json(
        { error: 'stageNumber must be a number between 1 and 7' },
        { status: 400 }
      )
    }

    // Get user session for AI service
    const session = await auth()
    const userId = session?.user?.id

    // Create AI service with user's API keys if available
    const aiService = userId
      ? createAIService(userId)
      : createSystemAIService()

    // Build prompts
    const systemPrompt = TT13_STAGE_PROMPT
    const userPrompt = buildStagePrompt(projectInfo, stageNumber)

    // Generate and validate stage data
    const stageData = await aiService.generateJSON<StageData>(
      userPrompt,
      systemPrompt,
      parseStageData
    )

    return Response.json({
      data: stageData,
      stage: {
        number: stageNumber,
        name: STAGE_NAMES[stageNumber]
      }
    })
  } catch (error) {
    console.error('Generate stage API error:', error)

    const errorMessage = error instanceof Error ? error.message : 'Unknown error'

    // Determine appropriate status code
    let status = 500
    if (errorMessage.includes('No AI provider available')) {
      status = 503
    } else if (errorMessage.includes('Invalid stage data')) {
      status = 422 // Unprocessable Entity - AI returned invalid data
    }

    return Response.json(
      {
        error: 'Failed to generate stage content',
        details: errorMessage
      },
      { status }
    )
  }
}
