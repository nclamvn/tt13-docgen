// app/api/generate-stage/route.ts

import { anthropic, AI_MODEL, MAX_TOKENS } from '@/lib/ai/claude'
import { GENERATE_STAGE_PROMPT, STAGE_NAMES } from '@/lib/ai/prompts/system'

export async function POST(req: Request) {
  try {
    const { projectInfo, stageNumber } = await req.json()

    if (!projectInfo || !stageNumber) {
      return Response.json(
        { error: 'Missing projectInfo or stageNumber' },
        { status: 400 }
      )
    }

    const stageName = STAGE_NAMES[stageNumber] || `Công đoạn ${stageNumber}`

    const prompt = GENERATE_STAGE_PROMPT
      .replace('{projectInfo}', JSON.stringify(projectInfo, null, 2))
      .replace('{stageNumber}', String(stageNumber))
      .replace('{stageName}', stageName)

    const response = await anthropic.messages.create({
      model: AI_MODEL,
      max_tokens: MAX_TOKENS,
      messages: [{ role: 'user', content: prompt }]
    })

    const textContent = response.content.find(c => c.type === 'text')
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text response from AI')
    }

    const jsonMatch = textContent.text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Could not parse JSON from AI response')
    }

    const stageData = JSON.parse(jsonMatch[0])

    return Response.json({ data: stageData })
  } catch (error) {
    console.error('Generate stage API error:', error)
    return Response.json(
      { error: 'Failed to generate stage content' },
      { status: 500 }
    )
  }
}
