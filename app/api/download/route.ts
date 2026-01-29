// app/api/download/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { generateDocument } from '@/lib/docgen/generator'
import type { DocumentData } from '@/types/document'

export async function POST(req: NextRequest) {
  try {
    const data: DocumentData = await req.json()

    // Convert images object to Map
    const imagesMap = new Map<number, string[]>()
    if (data.images) {
      Object.entries(data.images).forEach(([key, value]) => {
        imagesMap.set(Number(key), value as string[])
      })
    }

    const documentData = {
      ...data,
      images: imagesMap
    }

    const buffer = await generateDocument(documentData)

    // Generate filename
    const filename = `HoSo_TT13_${data.project.name.replace(/\s+/g, '_')}.docx`

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(filename)}"`,
        'Content-Length': buffer.length.toString()
      }
    })
  } catch (error) {
    console.error('Download API error:', error)
    return NextResponse.json(
      { error: 'Failed to generate document' },
      { status: 500 }
    )
  }
}
