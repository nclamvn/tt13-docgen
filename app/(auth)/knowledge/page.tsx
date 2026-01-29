"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  Upload,
  Search,
  Trash2,
  BookOpen,
  Scale,
  Shield,
  FileSignature,
  Building2,
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DocumentViewer } from '@/components/knowledge/document-viewer'
import { cn } from '@/lib/utils'
import type { PresetDocument, UserDocument } from '@/types/document-library'
import { CATEGORY_LABELS } from '@/types/document-library'

const CATEGORY_ICONS: Record<string, any> = {
  SOFTWARE: BookOpen,
  TAX: Building2,
  DATA: Shield,
  CONTRACT: FileSignature,
  INTERNAL: FileText,
  POLICY: Scale,
  OTHER: FileText
}

export default function KnowledgeBasePage() {
  const [activeTab, setActiveTab] = useState('preset')
  const [presetDocs, setPresetDocs] = useState<PresetDocument[]>([])
  const [userDocs, setUserDocs] = useState<UserDocument[]>([])
  const [selectedDoc, setSelectedDoc] = useState<PresetDocument | UserDocument | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isUploading, setIsUploading] = useState(false)

  // Fetch documents
  useEffect(() => {
    fetchDocuments()
  }, [])

  const fetchDocuments = async () => {
    setIsLoading(true)
    try {
      const [presetRes, userRes] = await Promise.all([
        fetch('/api/knowledge/preset'),
        fetch('/api/knowledge/user')
      ])

      if (presetRes.ok) {
        const data = await presetRes.json()
        setPresetDocs(data.documents)
      }

      if (userRes.ok) {
        const data = await userRes.json()
        setUserDocs(data.documents)
      }
    } catch (error) {
      console.error('Failed to fetch documents:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)

    for (const file of Array.from(files)) {
      const formData = new FormData()
      formData.append('file', file)

      try {
        const res = await fetch('/api/knowledge/user', {
          method: 'POST',
          body: formData
        })

        if (res.ok) {
          const data = await res.json()
          setUserDocs(prev => [data.document, ...prev])
        }
      } catch (error) {
        console.error('Failed to upload:', error)
      }
    }

    setIsUploading(false)
    e.target.value = '' // Reset input
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc muốn xóa tài liệu này?')) return

    try {
      const res = await fetch(`/api/knowledge/user/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setUserDocs(prev => prev.filter(d => d.id !== id))
        if (selectedDoc?.id === id) setSelectedDoc(null)
      }
    } catch (error) {
      console.error('Failed to delete:', error)
    }
  }

  const filteredPresetDocs = presetDocs.filter(doc => {
    const matchesSearch = searchQuery === '' ||
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !filterCategory || doc.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const filteredUserDocs = userDocs.filter(doc => {
    const matchesSearch = searchQuery === '' ||
      doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !filterCategory || doc.category === filterCategory
    return matchesSearch && matchesCategory
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold text-slate-800">
              Thư viện tài liệu
            </h1>
            <p className="text-slate-500 mt-1">
              Quản lý văn bản pháp luật và tài liệu tham khảo
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Document List */}
          <div className="lg:col-span-1 space-y-4">
            {/* Search & Filter */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm tài liệu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterCategory(null)}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium transition-colors",
                    !filterCategory
                      ? "bg-primary-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                >
                  Tất cả
                </button>
                {Object.entries(CATEGORY_LABELS).slice(0, 4).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setFilterCategory(key)}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium transition-colors",
                      filterCategory === key
                        ? "bg-primary-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="preset" className="flex-1">
                  Tài liệu chuẩn ({presetDocs.length})
                </TabsTrigger>
                <TabsTrigger value="user" className="flex-1">
                  Của tôi ({userDocs.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="preset" className="mt-4 space-y-2">
                {filteredPresetDocs.map((doc) => {
                  const Icon = CATEGORY_ICONS[doc.category] || FileText
                  return (
                    <DocumentCard
                      key={doc.id}
                      icon={Icon}
                      name={doc.shortName}
                      description={doc.description}
                      category={CATEGORY_LABELS[doc.category]}
                      isSelected={selectedDoc?.id === doc.id}
                      onClick={() => setSelectedDoc(doc)}
                      isPreset
                    />
                  )
                })}
                {filteredPresetDocs.length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Không tìm thấy tài liệu</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="user" className="mt-4 space-y-2">
                {/* Upload Zone */}
                <label className="block bg-white rounded-xl border-2 border-dashed border-slate-300 p-6
                                cursor-pointer hover:border-primary-400 hover:bg-slate-50 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept=".txt,.md,.docx,.pdf"
                    onChange={handleUpload}
                    className="hidden"
                    disabled={isUploading}
                  />
                  <div className="flex flex-col items-center text-center">
                    {isUploading ? (
                      <Loader2 className="w-8 h-8 text-primary-500 animate-spin mb-2" />
                    ) : (
                      <Upload className="w-8 h-8 text-slate-400 mb-2" />
                    )}
                    <p className="text-sm text-slate-600 font-medium">
                      {isUploading ? 'Đang tải lên...' : 'Kéo thả hoặc click để upload'}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      .txt, .md, .docx, .pdf
                    </p>
                  </div>
                </label>

                {filteredUserDocs.map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    icon={FileText}
                    name={doc.name}
                    description={`${(doc.fileSize / 1024).toFixed(1)} KB • ${doc.fileType.toUpperCase()}`}
                    category={doc.category ? CATEGORY_LABELS[doc.category] : undefined}
                    isSelected={selectedDoc?.id === doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    onDelete={() => handleDelete(doc.id)}
                  />
                ))}

                {filteredUserDocs.length === 0 && !isUploading && (
                  <div className="text-center py-8 text-slate-500">
                    <Upload className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Chưa có tài liệu nào</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right: Document Viewer */}
          <div className="lg:col-span-2">
            {selectedDoc ? (
              <DocumentViewer document={selectedDoc} />
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <BookOpen className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-medium text-slate-600">Chọn tài liệu để xem</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Click vào tài liệu bên trái để xem nội dung chi tiết
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Document Card Component
function DocumentCard({
  icon: Icon,
  name,
  description,
  category,
  isSelected,
  onClick,
  onDelete,
  isPreset
}: {
  icon: any
  name: string
  description: string
  category?: string
  isSelected: boolean
  onClick: () => void
  onDelete?: () => void
  isPreset?: boolean
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className={cn(
        "bg-white rounded-xl border p-4 cursor-pointer transition-all",
        isSelected
          ? "border-primary-500 ring-2 ring-primary-100"
          : "border-slate-200 hover:border-primary-300"
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
          isPreset ? "bg-primary-100" : "bg-slate-100"
        )}>
          <Icon className={cn(
            "w-5 h-5",
            isPreset ? "text-primary-600" : "text-slate-500"
          )} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-medium text-slate-800 truncate">{name}</p>
          <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{description}</p>
          {category && (
            <span className="inline-block mt-2 px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full">
              {category}
            </span>
          )}
        </div>

        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onDelete()
            }}
            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  )
}
