// types/api-keys.ts

export type ApiProvider = 'anthropic' | 'openai'

export interface ApiKeyInfo {
  id: string
  provider: ApiProvider
  keyHint: string
  isValid: boolean
  lastValidated: Date | null
  createdAt: Date
}

export interface ApiKeyFormData {
  provider: ApiProvider
  apiKey: string
}

export const PROVIDER_INFO: Record<ApiProvider, {
  name: string
  description: string
  placeholder: string
  docsUrl: string
}> = {
  anthropic: {
    name: 'Anthropic Claude',
    description: 'API để sử dụng Claude AI sinh nội dung hồ sơ',
    placeholder: 'sk-ant-...',
    docsUrl: 'https://console.anthropic.com/settings/keys'
  },
  openai: {
    name: 'OpenAI',
    description: 'API để sử dụng GPT models (backup)',
    placeholder: 'sk-...',
    docsUrl: 'https://platform.openai.com/api-keys'
  }
}
