// types/document-library.ts

export interface PresetDocument {
  id: string
  code: string
  name: string
  shortName: string
  category: DocumentCategory
  description: string
  content: string
  summary: string | null
  effectiveDate: Date | null
  isActive: boolean
}

export interface UserDocument {
  id: string
  userId: string
  name: string
  originalName: string
  fileUrl: string
  fileType: string
  fileSize: number
  content: string | null
  summary: string | null
  category: string | null
  tags: string[]
  isProcessed: boolean
  createdAt: Date
  updatedAt: Date
}

export type DocumentCategory = 'SOFTWARE' | 'TAX' | 'DATA' | 'CONTRACT' | 'INTERNAL' | 'POLICY' | 'OTHER'

export const CATEGORY_LABELS: Record<string, string> = {
  SOFTWARE: 'Phần mềm',
  TAX: 'Thuế',
  DATA: 'Dữ liệu',
  CONTRACT: 'Hợp đồng',
  INTERNAL: 'Nội bộ',
  POLICY: 'Chính sách',
  OTHER: 'Khác'
}
