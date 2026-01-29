"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Copy,
  Check,
  Download,
  Calendar,
  Tag,
  FileText,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { PresetDocument, UserDocument } from '@/types/document-library'
import { CATEGORY_LABELS } from '@/types/document-library'

interface DocumentViewerProps {
  document: PresetDocument | UserDocument
}

export function DocumentViewer({ document }: DocumentViewerProps) {
  const [copied, setCopied] = useState(false)
  const isPreset = 'code' in document

  const handleCopy = async () => {
    const content = isPreset
      ? (document as PresetDocument).content
      : (document as UserDocument).content || ''

    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const presetDoc = document as PresetDocument
  const userDoc = document as UserDocument

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">
              {isPreset ? presetDoc.name : userDoc.name}
            </h2>
            {isPreset && (
              <p className="text-primary-100 text-sm mt-1">
                {presetDoc.shortName}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopy}
              className="text-white hover:bg-primary-500"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
            {!isPreset && userDoc.fileUrl && !userDoc.fileUrl.startsWith('data:') && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => window.open(userDoc.fileUrl, '_blank')}
                className="text-white hover:bg-primary-500"
              >
                <Download className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Meta Info */}
      <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-4 text-sm">
        {isPreset && presetDoc.effectiveDate && (
          <div className="flex items-center gap-1.5 text-slate-600">
            <Calendar className="w-4 h-4" />
            <span>Hiệu lực: {new Date(presetDoc.effectiveDate).toLocaleDateString('vi-VN')}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5 text-slate-600">
          <Tag className="w-4 h-4" />
          <span>{CATEGORY_LABELS[isPreset ? presetDoc.category : (userDoc.category || 'OTHER')]}</span>
        </div>
        {!isPreset && (
          <div className="flex items-center gap-1.5 text-slate-600">
            <FileText className="w-4 h-4" />
            <span>{userDoc.fileType.toUpperCase()} • {(userDoc.fileSize / 1024).toFixed(1)} KB</span>
          </div>
        )}
      </div>

      {/* Summary (if available) */}
      {(isPreset ? presetDoc.summary : userDoc.summary) && (
        <div className="px-6 py-4 bg-primary-50 border-b border-primary-100">
          <div className="flex items-start gap-2">
            <Sparkles className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-primary-700 uppercase tracking-wide mb-1">
                Tóm tắt
              </p>
              <p className="text-sm text-slate-700">
                {isPreset ? presetDoc.summary : userDoc.summary}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 max-h-[600px] overflow-y-auto">
        {isPreset && (
          <p className="text-slate-600 mb-4 italic">
            {presetDoc.description}
          </p>
        )}

        <div className="prose prose-sm prose-slate max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-sm text-slate-700 leading-relaxed bg-transparent p-0 border-none">
            {isPreset ? presetDoc.content : (userDoc.content || 'Nội dung đang được xử lý...')}
          </pre>
        </div>
      </div>
    </motion.div>
  )
}
