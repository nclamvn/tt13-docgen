import { auth } from '@/lib/auth'
import { SYSTEM_PROMPT } from '@/lib/ai/prompts/system'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }

    const { messages, projectContext } = await req.json()

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    })

    // Build system prompt with context
    let systemPrompt = SYSTEM_PROMPT
    if (projectContext) {
      systemPrompt += `\n\n## CONTEXT HIỆN TẠI
- Bước: ${projectContext.step}
- Files đã upload: ${projectContext.files?.join(', ') || 'Chưa có'}
- Tên dự án: ${projectContext.config?.name || 'Chưa đặt'}
- Khách hàng: ${projectContext.config?.clientName || 'Chưa có'}
- Công đoạn: ${projectContext.config?.stages?.join(', ') || '1-7'}`
    }

    const stream = await anthropic.messages.stream({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
    })

    // Convert to readable stream for response
    const encoder = new TextEncoder()
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        }
        controller.close()
      },
    })

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
