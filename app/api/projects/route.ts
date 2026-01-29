import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

// GET all projects for current user
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const projects = await prisma.project.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: 'desc' },
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error('Get projects error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

// POST create new project
export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const body = await req.json()
    const { name, clientName, description, startDate, endDate, technologies, stages } =
      body

    const project = await prisma.project.create({
      data: {
        userId: session.user.id,
        name,
        clientName,
        description,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        technologies,
        stages: JSON.stringify(stages || [1, 2, 3, 4, 5, 6, 7]),
        status: 'DRAFT',
      },
    })

    return NextResponse.json(project)
  } catch (error) {
    console.error('Create project error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
