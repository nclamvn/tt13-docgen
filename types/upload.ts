// types/upload.ts

export interface UploadedFile {
  id: string
  name: string
  type: string
  size: number
  url?: string
  status: 'uploading' | 'processing' | 'completed' | 'error'
  error?: string
  extractedContent?: string
  extractedImages?: ExtractedImage[]
}

export interface ExtractedImage {
  id: string
  name: string
  stage: number | null  // cd1, cd2, ... cd7
  dataUrl: string
  width?: number
  height?: number
}

export interface ProcessedInput {
  description: string
  images: ExtractedImage[]
  metadata: {
    totalFiles: number
    totalImages: number
    fileTypes: string[]
  }
}
