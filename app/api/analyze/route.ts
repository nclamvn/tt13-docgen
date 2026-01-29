// app/api/analyze/route.ts

import { anthropic, AI_MODEL, MAX_TOKENS } from '@/lib/ai/claude'
import { ANALYZE_PROMPT } from '@/lib/ai/prompts/system'

export async function POST(req: Request) {
  try {
    const { content } = await req.json()

    if (!content || content.trim().length === 0) {
      return Response.json(
        { error: 'No content provided for analysis' },
        { status: 400 }
      )
    }

    const prompt = ANALYZE_PROMPT.replace('{content}', content)

    const response = await anthropic.messages.create({
      model: AI_MODEL,
      max_tokens: MAX_TOKENS,
      messages: [{ role: 'user', content: prompt }]
    })

    // Extract text from response
    const textContent = response.content.find(c => c.type === 'text')
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text response from AI')
    }

    // Parse JSON from response
    const jsonMatch = textContent.text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Could not parse JSON from AI response')
    }

    const extractedData = JSON.parse(jsonMatch[0])

    return Response.json({ data: extractedData })
  } catch (error) {
    console.error('Analyze API error:', error)
    return Response.json(
      { error: 'Failed to analyze content' },
      { status: 500 }
    )
  }
}
