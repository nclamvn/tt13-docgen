'use client'

import { useState, useRef, useEffect } from 'react'
import { ChatMessage, Message } from './chat-message'
import { ChatInput } from './chat-input'
import { TypingIndicator } from './typing-indicator'
import { Bot } from 'lucide-react'

interface ChatPanelProps {
  projectContext?: any
}

export function ChatPanel({ projectContext }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Xin chào! Tôi là AI Copilot của TT13 DocGen. Tôi sẽ hỗ trợ bạn tạo hồ sơ TT13/2020.\n\nBắt đầu bằng cách upload file mô tả dự án và ảnh minh họa (nếu có). Tôi sẽ phân tích và đề xuất nội dung cho bạn.',
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    }
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    try {
      // Call AI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          projectContext,
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      // Handle streaming response
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '',
      }
      setMessages((prev) => [...prev, assistantMessage])

      while (reader) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        assistantContent += chunk

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessage.id
              ? { ...m, content: assistantContent }
              : m
          )
        )
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại.',
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="flex flex-col h-full bg-white rounded-xl border">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b">
        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
          <Bot className="h-4 w-4 text-primary-600" />
        </div>
        <div>
          <h3 className="font-medium text-slate-900 text-sm">AI Copilot</h3>
          <p className="text-xs text-slate-500">Hỗ trợ tạo hồ sơ TT13/2020</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={handleSendMessage} disabled={isTyping} />
    </div>
  )
}
