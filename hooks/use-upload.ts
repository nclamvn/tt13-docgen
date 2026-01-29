import { useState, useCallback } from 'react'
import { useProjectStore } from '@/stores/project-store'

interface UploadResult {
  name: string
  url: string
  type: string
  size: number
  extractedImages?: { name: string; stage: number | null }[]
}

export function useUpload(projectId?: string) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [uploadedFiles, setUploadedFiles] = useState<UploadResult[]>([])

  const { addFiles } = useProjectStore()

  const uploadFiles = useCallback(
    async (files: File[]) => {
      setIsUploading(true)
      setUploadError(null)

      try {
        // If no projectId, just store locally
        if (!projectId) {
          addFiles(files)
          setUploadedFiles((prev) => [
            ...prev,
            ...files.map((f) => ({
              name: f.name,
              url: URL.createObjectURL(f),
              type: f.type,
              size: f.size,
            })),
          ])
          return
        }

        // Upload to server
        const formData = new FormData()
        files.forEach((file) => {
          formData.append('files', file)
        })

        const response = await fetch(`/api/projects/${projectId}/upload`, {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          throw new Error('Upload failed')
        }

        const result = await response.json()
        setUploadedFiles((prev) => [...prev, ...result.files])
        addFiles(files)

        return result.files
      } catch (err) {
        console.error('Upload error:', err)
        setUploadError('Không thể upload file. Vui lòng thử lại.')
        throw err
      } finally {
        setIsUploading(false)
      }
    },
    [projectId, addFiles]
  )

  const removeFile = useCallback((index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const clearFiles = useCallback(() => {
    setUploadedFiles([])
  }, [])

  return {
    uploadFiles,
    removeFile,
    clearFiles,
    uploadedFiles,
    isUploading,
    uploadError,
  }
}
