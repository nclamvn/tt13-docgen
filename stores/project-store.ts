import { create } from 'zustand'
import type { Project, ExtractedData, DocumentData } from '@/types/project'

interface ProjectConfig {
  name: string
  clientName: string
  startDate: string
  endDate: string
  technologies: string
  stages: number[]
}

interface ProjectStore {
  // Current project being edited
  currentProject: Project | null
  setCurrentProject: (project: Project | null) => void

  // Workspace state
  currentStep: number
  setCurrentStep: (step: number) => void

  // Upload state
  uploadedFiles: File[]
  addFiles: (files: File[]) => void
  removeFile: (index: number) => void
  clearFiles: () => void

  // Config state
  config: ProjectConfig
  setConfig: (config: Partial<ProjectConfig>) => void
  resetConfig: () => void

  // Generation state
  generatingStage: number | null
  setGeneratingStage: (stage: number | null) => void
  completedStages: number[]
  addCompletedStage: (stage: number) => void
  resetCompletedStages: () => void
  progress: number
  setProgress: (progress: number) => void

  // Extracted data
  extractedData: ExtractedData | null
  setExtractedData: (data: ExtractedData | null) => void

  // Document data
  documentData: DocumentData | null
  setDocumentData: (data: DocumentData | null) => void

  // Reset all
  resetWorkspace: () => void
}

const initialConfig: ProjectConfig = {
  name: '',
  clientName: '',
  startDate: '',
  endDate: '',
  technologies: '',
  stages: [1, 2, 3, 4, 5, 6, 7],
}

export const useProjectStore = create<ProjectStore>((set) => ({
  currentProject: null,
  setCurrentProject: (project) => set({ currentProject: project }),

  currentStep: 1,
  setCurrentStep: (step) => set({ currentStep: step }),

  uploadedFiles: [],
  addFiles: (files) =>
    set((state) => ({ uploadedFiles: [...state.uploadedFiles, ...files] })),
  removeFile: (index) =>
    set((state) => ({
      uploadedFiles: state.uploadedFiles.filter((_, i) => i !== index),
    })),
  clearFiles: () => set({ uploadedFiles: [] }),

  config: initialConfig,
  setConfig: (config) =>
    set((state) => ({ config: { ...state.config, ...config } })),
  resetConfig: () => set({ config: initialConfig }),

  generatingStage: null,
  setGeneratingStage: (stage) => set({ generatingStage: stage }),
  completedStages: [],
  addCompletedStage: (stage) =>
    set((state) => ({
      completedStages: [...state.completedStages, stage],
    })),
  resetCompletedStages: () => set({ completedStages: [] }),
  progress: 0,
  setProgress: (progress) => set({ progress }),

  extractedData: null,
  setExtractedData: (data) => set({ extractedData: data }),

  documentData: null,
  setDocumentData: (data) => set({ documentData: data }),

  resetWorkspace: () =>
    set({
      currentProject: null,
      currentStep: 1,
      uploadedFiles: [],
      config: initialConfig,
      generatingStage: null,
      completedStages: [],
      progress: 0,
      extractedData: null,
      documentData: null,
    }),
}))
