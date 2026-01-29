'use client'

import { Bot } from 'lucide-react'

export function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
        <Bot className="h-4 w-4 text-primary-600" />
      </div>
      <div className="bg-primary-100 rounded-2xl rounded-tl-sm px-4 py-3">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-primary-400 typing-dot" />
          <div className="h-2 w-2 rounded-full bg-primary-400 typing-dot" />
          <div className="h-2 w-2 rounded-full bg-primary-400 typing-dot" />
        </div>
      </div>
    </div>
  )
}
