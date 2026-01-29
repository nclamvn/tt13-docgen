'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { cn, formatFileSize } from '@/lib/utils'
import { Upload, File, X, FileText, Archive, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface UploadedFile {
  file: File
  status: 'uploading' | 'done' | 'error'
}

interface UploadZoneProps {
  onFilesUploaded: (files: File[]) => void
}

export function UploadZone({ onFilesUploaded }: UploadZoneProps) {
  const [files, setFiles] = useState<UploadedFile[]>([])

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) => ({
        file,
        status: 'done' as const,
      }))
      setFiles((prev) => [...prev, ...newFiles])
      onFilesUploaded(acceptedFiles)
    },
    [onFilesUploaded]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt'],
      'text/markdown': ['.md'],
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/zip': ['.zip'],
    },
  })

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.zip')) return Archive
    return FileText
  }

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          'border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors',
          isDragActive
            ? 'border-primary-500 bg-primary-50'
            : 'border-slate-300 hover:border-primary-400 hover:bg-slate-50'
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center mb-4">
            <Upload className="h-7 w-7 text-primary-600" />
          </div>
          <p className="text-slate-700 font-medium mb-1">
            {isDragActive ? 'Thả file vào đây' : 'Kéo thả file vào đây'}
          </p>
          <p className="text-sm text-slate-500 mb-4">hoặc click để chọn file</p>
          <p className="text-xs text-slate-400">
            Hỗ trợ: .txt, .md, .docx, .pdf (mô tả), .zip (ảnh minh họa)
          </p>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-slate-700">
            File đã upload ({files.length})
          </h4>
          <div className="space-y-2">
            {files.map((item, index) => {
              const FileIcon = getFileIcon(item.file.name)
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-white border flex items-center justify-center">
                      <FileIcon className="h-5 w-5 text-slate-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        {item.file.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {formatFileSize(item.file.size)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.status === 'done' && (
                      <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center">
                        <Check className="h-3.5 w-3.5 text-primary-600" />
                      </div>
                    )}
                    <button
                      onClick={() => removeFile(index)}
                      className="h-8 w-8 rounded-lg hover:bg-slate-200 flex items-center justify-center transition-colors"
                    >
                      <X className="h-4 w-4 text-slate-500" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
