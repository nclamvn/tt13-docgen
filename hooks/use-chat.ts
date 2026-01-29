import { useState, useCallback } from 'react'
import { useChatStore } from '@/stores/chat-store'

interface ProjectContext {
  step?: number
  files?: string[]
  config?: {
    name?: string
    clientName?: string
    stages?: number[]
  }
}

export function useChat(projectContext?: ProjectContext) {
  const {
    messages,
    isLoading,
    error,
    addMessage,
    updateMessage,
    setLoading,
    setError,
  } = useChatStore()

  const sendMessage = useCallback(
    async (content: string) => {
      // Add user message
      addMessage({ role: 'user', content })
      setLoading(true)
      setError(null)

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [...messages, { role: 'user', content }].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            projectContext,
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to get response')
        }

        // Create placeholder for assistant message
        const assistantId = Date.now().toString()
        addMessage({ role: 'assistant', content: '' })

        // Stream response
        const reader = response.body?.getReader()
        const decoder = new TextDecoder()
        let assistantContent = ''

        while (reader) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          assistantContent += chunk

          // Update the last assistant message
          updateMessage(assistantId, assistantContent)
        }
      } catch (err) {
        console.error('Chat error:', err)
        setError('Có lỗi xảy ra. Vui lòng thử lại.')
        addMessage({
          role: 'assistant',
          content: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại.',
        })
      } finally {
        setLoading(false)
      }
    },
    [messages, projectContext, addMessage, updateMessage, setLoading, setError]
  )

  return {
    messages,
    isLoading,
    error,
    sendMessage,
  }
}
