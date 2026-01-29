"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Key,
  Eye,
  EyeOff,
  Trash2,
  Check,
  AlertCircle,
  ExternalLink,
  Shield,
  Loader2,
  Plus,
  Bot,
  Brain,
  type LucideIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ApiKeyInfo, ApiProvider } from '@/types/api-keys'
import { PROVIDER_INFO } from '@/types/api-keys'

const PROVIDER_ICONS: Record<ApiProvider, LucideIcon> = {
  anthropic: Bot,
  openai: Brain
}

export function ApiKeysSection() {
  const [keys, setKeys] = useState<ApiKeyInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState<ApiProvider | null>(null)
  const [newKey, setNewKey] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showKey, setShowKey] = useState<Record<string, boolean>>({})

  // Fetch keys on mount
  useEffect(() => {
    fetchKeys()
  }, [])

  const fetchKeys = async () => {
    try {
      const res = await fetch('/api/settings/api-keys')
      if (res.ok) {
        const data = await res.json()
        setKeys(data.keys)
      }
    } catch (error) {
      console.error('Failed to fetch keys:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async (provider: ApiProvider) => {
    if (!newKey.trim()) return

    setIsSaving(true)
    setError(null)

    try {
      const res = await fetch('/api/settings/api-keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider, apiKey: newKey })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Không thể lưu API key')
        return
      }

      setNewKey('')
      setShowAddForm(null)
      fetchKeys()
    } catch (error) {
      setError('Có lỗi xảy ra')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async (provider: ApiProvider) => {
    if (!confirm('Bạn có chắc muốn xóa API key này?')) return

    try {
      const res = await fetch('/api/settings/api-keys', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider })
      })

      if (res.ok) {
        fetchKeys()
      }
    } catch (error) {
      console.error('Failed to delete:', error)
    }
  }

  const getKeyForProvider = (provider: ApiProvider) => {
    return keys.find(k => k.provider === provider)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary-500" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <Key className="w-5 h-5 text-primary-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">API Keys</h3>
          <p className="text-sm text-slate-500">
            Cung cấp API key để sử dụng tính năng AI sinh nội dung
          </p>
        </div>
      </div>

      {/* API Key Cards */}
      <div className="space-y-4">
        {(['anthropic', 'openai'] as ApiProvider[]).map((provider) => {
          const info = PROVIDER_INFO[provider]
          const existingKey = getKeyForProvider(provider)
          const isAddingThis = showAddForm === provider

          const Icon = PROVIDER_ICONS[provider]

          return (
            <div
              key={provider}
              className="bg-white border border-slate-200 rounded-xl p-5"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">{info.name}</h4>
                    <p className="text-sm text-slate-500">{info.description}</p>
                  </div>
                </div>
                <a
                  href={info.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
                >
                  Lấy key <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="mt-4">
                {existingKey ? (
                  // Existing key display
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-50 rounded-lg px-4 py-3 font-mono text-sm">
                      {showKey[provider] ? existingKey.keyHint : '•'.repeat(40)}
                    </div>
                    <button
                      onClick={() => setShowKey(prev => ({ ...prev, [provider]: !prev[provider] }))}
                      className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"
                    >
                      {showKey[provider] ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => handleDelete(provider)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ) : isAddingThis ? (
                  // Add form
                  <div className="space-y-3">
                    <input
                      type="password"
                      value={newKey}
                      onChange={(e) => setNewKey(e.target.value)}
                      placeholder={info.placeholder}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg font-mono text-sm
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                      autoFocus
                    />

                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 text-red-600 text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleSave(provider)}
                        disabled={isSaving || !newKey.trim()}
                        className="gap-2"
                      >
                        {isSaving ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Check className="w-4 h-4" />
                        )}
                        Lưu
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setShowAddForm(null)
                          setNewKey('')
                          setError(null)
                        }}
                      >
                        Hủy
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Add button
                  <Button
                    variant="outline"
                    onClick={() => setShowAddForm(provider)}
                    className="gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Thêm API key
                  </Button>
                )}

                {/* Status badge */}
                {existingKey && (
                  <div className="flex items-center gap-2 mt-3 text-sm">
                    <Check className="w-4 h-4 text-primary-500" />
                    <span className="text-primary-600">Đã xác thực</span>
                    <span className="text-slate-400">•</span>
                    <Shield className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-500">Mã hóa AES-256</span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Security Note */}
      <div className="bg-primary-50 border border-primary-100 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-primary-800">Lưu ý bảo mật</p>
            <ul className="mt-1 space-y-1 text-primary-700">
              <li>• API keys được mã hóa AES-256 trước khi lưu</li>
              <li>• Chỉ bạn mới có thể sử dụng key của mình</li>
              <li>• Không bao giờ chia sẻ key với người khác</li>
              <li>• Key sẽ được xác thực khi lưu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
