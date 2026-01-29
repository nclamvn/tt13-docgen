export type ProjectStatus =
  | 'DRAFT'
  | 'UPLOADING'
  | 'ANALYZING'
  | 'CONFIGURING'
  | 'GENERATING'
  | 'COMPLETED'
  | 'ERROR'

export interface Project {
  id: string
  userId: string
  name: string
  clientName: string | null
  description: string | null
  startDate: Date | null
  endDate: Date | null
  technologies: string | null
  status: ProjectStatus
  currentStep: number
  inputFiles: InputFile[] | null
  extractedData: ExtractedData | null
  documentData: DocumentData | null
  docxUrl: string | null
  pdfUrl: string | null
  stages: number[]
  templateId: string | null
  createdAt: Date
  updatedAt: Date
}

export interface InputFile {
  name: string
  url: string
  type: string
  size: number
  extractedImages?: ExtractedImage[]
}

export interface ExtractedImage {
  name: string
  stage: number | null
}

export interface ExtractedData {
  projectName?: string
  clientName?: string
  description?: string
  features?: string[]
  technologies?: string[]
  estimatedDuration?: string
  suggestions?: string[]
}

export interface DocumentData {
  stage1?: StageData
  stage2?: StageData
  stage3?: StageData
  stage4?: StageData
  stage5?: StageData
  stage6?: StageData
  stage7?: StageData
}

export interface StageData {
  title: string
  description: string
  objectives?: string[]
  activities?: Activity[]
  deliverables?: string[]
  participants?: Participant[]
  timeline?: Timeline
  notes?: string
}

export interface Activity {
  name: string
  description: string
  duration: string
}

export interface Participant {
  role: string
  name: string
  responsibility: string
}

export interface Timeline {
  start: string
  end: string
}
