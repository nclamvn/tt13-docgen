// lib/files/processor.ts

import JSZip from 'jszip'
import mammoth from 'mammoth'
import { v4 as uuidv4 } from 'uuid'
import type { ExtractedImage, ProcessedInput } from '@/types/upload'

// Extract stage number from filename: cd1-xxx.png → 1
export function extractStageFromFilename(filename: string): number | null {
  const match = filename.match(/cd(\d)-/i)
  if (match) {
    const stage = parseInt(match[1])
    return stage >= 1 && stage <= 7 ? stage : null
  }
  return null
}

// Process text file
export async function processTextFile(file: File): Promise<string> {
  return await file.text()
}

// Process markdown file
export async function processMarkdownFile(file: File): Promise<string> {
  return await file.text()
}

// Process DOCX file
export async function processDocxFile(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer()
  const result = await mammoth.extractRawText({ arrayBuffer })
  return result.value
}

// Process PDF file (basic text extraction)
export async function processPdfFile(file: File): Promise<string> {
  // For client-side, we'll send to API for processing
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch('/api/process-pdf', {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error('Failed to process PDF')
  }

  const data = await response.json()
  return data.text
}

// Process ZIP file and extract images
export async function processZipFile(file: File): Promise<ExtractedImage[]> {
  const arrayBuffer = await file.arrayBuffer()
  const zip = await JSZip.loadAsync(arrayBuffer)
  const images: ExtractedImage[] = []

  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp']

  for (const [filename, zipEntry] of Object.entries(zip.files)) {
    if (zipEntry.dir) continue

    const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'))
    if (!imageExtensions.includes(ext)) continue

    try {
      const blob = await zipEntry.async('blob')
      const dataUrl = await blobToDataUrl(blob)

      // Get just the filename without path
      const name = filename.split('/').pop() || filename

      images.push({
        id: uuidv4(),
        name,
        stage: extractStageFromFilename(name),
        dataUrl
      })
    } catch (error) {
      console.error(`Failed to process image: ${filename}`, error)
    }
  }

  // Sort by stage number
  return images.sort((a, b) => {
    if (a.stage === null && b.stage === null) return 0
    if (a.stage === null) return 1
    if (b.stage === null) return -1
    return a.stage - b.stage
  })
}

// Convert Blob to Data URL
function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

// Process single file based on type
export async function processFile(file: File): Promise<{
  content?: string
  images?: ExtractedImage[]
}> {
  const ext = file.name.toLowerCase().substring(file.name.lastIndexOf('.'))

  switch (ext) {
    case '.txt':
      return { content: await processTextFile(file) }
    case '.md':
      return { content: await processMarkdownFile(file) }
    case '.docx':
      return { content: await processDocxFile(file) }
    case '.pdf':
      return { content: await processPdfFile(file) }
    case '.zip':
      return { images: await processZipFile(file) }
    default:
      throw new Error(`Unsupported file type: ${ext}`)
  }
}

// Process all uploaded files
export async function processAllFiles(files: File[]): Promise<ProcessedInput> {
  let description = ''
  let images: ExtractedImage[] = []
  const fileTypes: string[] = []

  for (const file of files) {
    const ext = file.name.toLowerCase().substring(file.name.lastIndexOf('.'))
    fileTypes.push(ext)

    try {
      const result = await processFile(file)

      if (result.content) {
        description += (description ? '\n\n---\n\n' : '') + result.content
      }

      if (result.images) {
        images = [...images, ...result.images]
      }
    } catch (error) {
      console.error(`Failed to process file: ${file.name}`, error)
    }
  }

  return {
    description,
    images,
    metadata: {
      totalFiles: files.length,
      totalImages: images.length,
      fileTypes: Array.from(new Set(fileTypes))
    }
  }
}
