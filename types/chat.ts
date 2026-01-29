export interface ChatMessage {
  id: string
  projectId: string
  role: 'user' | 'assistant' | 'system'
  content: string
  createdAt: Date
}

export interface ChatRequest {
  messages: {
    role: 'user' | 'assistant'
    content: string
  }[]
  projectContext?: ProjectContext
}

export interface ProjectContext {
  step: number
  files?: string[]
  config?: {
    name?: string
    clientName?: string
    stages?: number[]
  }
}
