// app/api/knowledge/preset/route.ts

import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const documents = await prisma.presetDocument.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    })

    return NextResponse.json({ documents })
  } catch (error) {
    console.error('Failed to fetch preset documents:', error)
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 })
  }
}
