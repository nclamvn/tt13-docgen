// lib/api-keys.ts

import { prisma } from '@/lib/db'
import { encrypt, decrypt, createKeyHint, validateKeyFormat } from '@/lib/encryption'
import Anthropic from '@anthropic-ai/sdk'
import OpenAI from 'openai'
import type { ApiProvider } from '@/types/api-keys'

/**
 * Save or update user's API key (encrypted)
 */
export async function saveApiKey(
  userId: string,
  provider: ApiProvider,
  apiKey: string
): Promise<{ success: boolean; error?: string }> {
  // Validate format
  if (!validateKeyFormat(provider, apiKey)) {
    return { success: false, error: 'Định dạng API key không hợp lệ' }
  }

  // Validate key by making a test request
  const isValid = await validateApiKey(provider, apiKey)
  if (!isValid) {
    return { success: false, error: 'API key không hợp lệ hoặc đã hết hạn' }
  }

  // Encrypt and save
  const encryptedKey = encrypt(apiKey)
  const keyHint = createKeyHint(apiKey)

  await prisma.apiKey.upsert({
    where: {
      userId_provider: { userId, provider }
    },
    update: {
      encryptedKey,
      keyHint,
      isValid: true,
      lastValidated: new Date()
    },
    create: {
      userId,
      provider,
      encryptedKey,
      keyHint,
      isValid: true,
      lastValidated: new Date()
    }
  })

  return { success: true }
}

/**
 * Get user's decrypted API key
 */
export async function getApiKey(
  userId: string,
  provider: ApiProvider
): Promise<string | null> {
  const apiKey = await prisma.apiKey.findUnique({
    where: {
      userId_provider: { userId, provider }
    }
  })

  if (!apiKey || !apiKey.isValid) {
    return null
  }

  try {
    return decrypt(apiKey.encryptedKey)
  } catch (error) {
    console.error('Failed to decrypt API key:', error)
    return null
  }
}

/**
 * Get all user's API keys info (without decrypting)
 */
export async function getUserApiKeys(userId: string) {
  const keys = await prisma.apiKey.findMany({
    where: { userId },
    select: {
      id: true,
      provider: true,
      keyHint: true,
      isValid: true,
      lastValidated: true,
      createdAt: true
    }
  })

  return keys
}

/**
 * Delete user's API key
 */
export async function deleteApiKey(userId: string, provider: ApiProvider) {
  await prisma.apiKey.delete({
    where: {
      userId_provider: { userId, provider }
    }
  })
}

/**
 * Validate API key by making a test request
 */
async function validateApiKey(provider: ApiProvider, apiKey: string): Promise<boolean> {
  try {
    if (provider === 'anthropic') {
      const client = new Anthropic({ apiKey })
      // Make a minimal test request
      await client.messages.create({
        model: 'claude-3-haiku-20240307',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'Hi' }]
      })
      return true
    }

    if (provider === 'openai') {
      const client = new OpenAI({ apiKey })
      await client.models.list()
      return true
    }

    return false
  } catch (error: any) {
    console.error(`API key validation failed for ${provider}:`, error.message)
    return false
  }
}

/**
 * Get AI client with user's API key
 */
export async function getAIClient(userId: string, preferredProvider: ApiProvider = 'anthropic') {
  // Try preferred provider first
  let apiKey = await getApiKey(userId, preferredProvider)

  if (apiKey) {
    if (preferredProvider === 'anthropic') {
      return { provider: 'anthropic' as const, client: new Anthropic({ apiKey }) }
    }
    if (preferredProvider === 'openai') {
      return { provider: 'openai' as const, client: new OpenAI({ apiKey }) }
    }
  }

  // Fallback to other provider
  const fallbackProvider = preferredProvider === 'anthropic' ? 'openai' : 'anthropic'
  apiKey = await getApiKey(userId, fallbackProvider)

  if (apiKey) {
    if (fallbackProvider === 'anthropic') {
      return { provider: 'anthropic' as const, client: new Anthropic({ apiKey }) }
    }
    if (fallbackProvider === 'openai') {
      return { provider: 'openai' as const, client: new OpenAI({ apiKey }) }
    }
  }

  // No user API key - fall back to system key if available
  if (process.env.ANTHROPIC_API_KEY) {
    return {
      provider: 'anthropic' as const,
      client: new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    }
  }

  // No API key configured
  return null
}
