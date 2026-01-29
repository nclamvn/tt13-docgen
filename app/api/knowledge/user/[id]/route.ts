// app/api/knowledge/user/[id]/route.ts

import { prisma } from '@/lib/db'
import { auth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const document = await prisma.userDocument.findFirst({
      where: { id: params.id, userId: session.user.id }
    })

    if (!document) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    // Delete from database
    await prisma.userDocument.delete({ where: { id: params.id } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete document:', error)
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
  }
}
