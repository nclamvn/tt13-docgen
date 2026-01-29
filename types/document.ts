// types/document.ts

export interface ProjectData {
  id: string
  name: string
  clientName: string
  description: string
  startDate: string
  endDate: string
  technologies: string[]
  features: { name: string; description: string }[]
}

export interface StageData {
  title: string
  objective: string
  activities: {
    name: string
    description: string
    duration: string
    responsible: string
  }[]
  deliverables: {
    name: string
    description: string
    format: string
  }[]
  tools: string[]
  participants: {
    role: string
    responsibility: string
  }[]
  qualityCriteria: string[]
  notes?: string
}

export interface DocumentData {
  project: ProjectData
  stages: Record<number, StageData>
  images: Map<number, string[]> // stage -> image dataUrls
  brandColor?: string
  logoUrl?: string
}
