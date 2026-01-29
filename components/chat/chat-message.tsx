'use client'

import { cn } from '@/lib/utils'
import { Bot, User } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={cn('flex gap-3', isUser && 'flex-row-reverse')}>
      <div
        className={cn(
          'h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0',
          isUser ? 'bg-primary-600' : 'bg-primary-100'
        )}
      >
        {isUser ? (
          <User className="h-4 w-4 text-white" />
        ) : (
          <Bot className="h-4 w-4 text-primary-600" />
        )}
      </div>
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-3',
          isUser
            ? 'bg-primary-600 text-white rounded-tr-sm'
            : 'bg-primary-100 text-slate-800 rounded-tl-sm'
        )}
      >
        <div className={cn('text-sm', isUser ? 'text-white' : 'prose prose-sm prose-slate max-w-none')}>
          {isUser ? (
            message.content
          ) : (
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-4 mb-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-4 mb-2">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              }}
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  )
}
