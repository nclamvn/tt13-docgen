// lib/encryption.ts

import CryptoJS from 'crypto-js'

const ENCRYPTION_SECRET = process.env.API_KEY_ENCRYPTION_SECRET || 'default-dev-secret-key-32-chars!'

/**
 * Encrypt sensitive data using AES-256
 */
export function encrypt(text: string): string {
  const encrypted = CryptoJS.AES.encrypt(text, ENCRYPTION_SECRET).toString()
  return encrypted
}

/**
 * Decrypt data
 */
export function decrypt(encryptedText: string): string {
  const bytes = CryptoJS.AES.decrypt(encryptedText, ENCRYPTION_SECRET)
  const decrypted = bytes.toString(CryptoJS.enc.Utf8)

  if (!decrypted) {
    throw new Error('Failed to decrypt')
  }

  return decrypted
}

/**
 * Create a hint for display (e.g., "sk-ant-...xxxx")
 */
export function createKeyHint(apiKey: string): string {
  if (apiKey.length < 8) return '****'

  const prefix = apiKey.substring(0, 7)  // "sk-ant-" or "sk-..."
  const suffix = apiKey.substring(apiKey.length - 4)

  return `${prefix}...${suffix}`
}

/**
 * Validate API key format
 */
export function validateKeyFormat(provider: string, apiKey: string): boolean {
  switch (provider) {
    case 'anthropic':
      return apiKey.startsWith('sk-ant-') && apiKey.length > 40
    case 'openai':
      return apiKey.startsWith('sk-') && apiKey.length > 20
    default:
      return false
  }
}
