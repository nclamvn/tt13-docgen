// app/api/settings/api-keys/route.ts

import { auth } from '@/lib/auth'
import { getUserApiKeys, saveApiKey, deleteApiKey } from '@/lib/api-keys'
import { NextRequest, NextResponse } from 'next/server'
import type { ApiProvider } from '@/types/api-keys'

// GET - List user's API keys
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const keys = await getUserApiKeys(session.user.id)
    return NextResponse.json({ keys })
  } catch (error) {
    console.error('Failed to get API keys:', error)
    return NextResponse.json({ error: 'Failed to get API keys' }, { status: 500 })
  }
}

// POST - Save new API key
export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { provider, apiKey } = await req.json()

    if (!provider || !apiKey) {
      return NextResponse.json({ error: 'Missing provider or apiKey' }, { status: 400 })
    }

    if (!['anthropic', 'openai'].includes(provider)) {
      return NextResponse.json({ error: 'Invalid provider' }, { status: 400 })
    }

    const result = await saveApiKey(session.user.id, provider as ApiProvider, apiKey)

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to save API key:', error)
    return NextResponse.json({ error: 'Failed to save API key' }, { status: 500 })
  }
}

// DELETE - Remove API key
export async function DELETE(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { provider } = await req.json()

    if (!provider || !['anthropic', 'openai'].includes(provider)) {
      return NextResponse.json({ error: 'Invalid provider' }, { status: 400 })
    }

    await deleteApiKey(session.user.id, provider as ApiProvider)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete API key:', error)
    return NextResponse.json({ error: 'Failed to delete API key' }, { status: 500 })
  }
}
