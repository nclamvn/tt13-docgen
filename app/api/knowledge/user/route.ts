// app/api/knowledge/user/route.ts

import { prisma } from '@/lib/db'
import { auth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const documents = await prisma.userDocument.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' }
    })

    // Parse tags from JSON string
    const parsedDocuments = documents.map(doc => ({
      ...doc,
      tags: JSON.parse(doc.tags || '[]')
    }))

    return NextResponse.json({ documents: parsedDocuments })
  } catch (error) {
    console.error('Failed to fetch user documents:', error)
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get('file') as File
    const category = formData.get('category') as string | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Read file content
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Process content based on file type
    let content: string | null = null
    const fileType = file.name.split('.').pop()?.toLowerCase() || 'unknown'

    if (fileType === 'txt' || fileType === 'md') {
      content = buffer.toString('utf-8')
    } else if (fileType === 'docx') {
      try {
        const mammoth = await import('mammoth')
        const result = await mammoth.extractRawText({ buffer })
        content = result.value
      } catch (e) {
        console.error('Failed to extract DOCX:', e)
      }
    } else if (fileType === 'pdf') {
      try {
        const pdfParse = (await import('pdf-parse')).default
        const data = await pdfParse(buffer)
        content = data.text
      } catch (e) {
        console.error('Failed to extract PDF:', e)
      }
    }

    // For now, store file as base64 (in production, use cloud storage)
    const fileUrl = `data:application/octet-stream;base64,${buffer.toString('base64')}`

    // Save to database
    const document = await prisma.userDocument.create({
      data: {
        userId: session.user.id,
        name: file.name.replace(/\.[^/.]+$/, ''),
        originalName: file.name,
        fileUrl,
        fileType,
        fileSize: file.size,
        content,
        category,
        isProcessed: !!content
      }
    })

    return NextResponse.json({
      document: {
        ...document,
        tags: []
      }
    })
  } catch (error) {
    console.error('Failed to upload document:', error)
    return NextResponse.json({ error: 'Failed to upload' }, { status: 500 })
  }
}
