import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

// GET single project
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const project = await prisma.project.findUnique({
      where: { id: params.id },
      include: { messages: true },
    })

    if (!project || project.userId !== session.user.id) {
      return new NextResponse('Not Found', { status: 404 })
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error('Get project error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

// PUT update project
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const project = await prisma.project.findUnique({
      where: { id: params.id },
    })

    if (!project || project.userId !== session.user.id) {
      return new NextResponse('Not Found', { status: 404 })
    }

    const body = await req.json()
    const updated = await prisma.project.update({
      where: { id: params.id },
      data: {
        ...body,
        startDate: body.startDate ? new Date(body.startDate) : project.startDate,
        endDate: body.endDate ? new Date(body.endDate) : project.endDate,
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Update project error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

// DELETE project
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const project = await prisma.project.findUnique({
      where: { id: params.id },
    })

    if (!project || project.userId !== session.user.id) {
      return new NextResponse('Not Found', { status: 404 })
    }

    await prisma.project.delete({
      where: { id: params.id },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error('Delete project error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
