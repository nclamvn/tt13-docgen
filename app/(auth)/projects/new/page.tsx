'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Stepper } from '@/components/workspace/stepper'
import { UploadZone } from '@/components/workspace/upload-zone'
import { ConfigForm } from '@/components/workspace/config-form'
import { DocumentPreview } from '@/components/workspace/document-preview'
import { ExportPanel } from '@/components/workspace/export-panel'
import { ChatPanel } from '@/components/chat/chat-panel'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface ProjectConfig {
  name: string
  clientName: string
  startDate: string
  endDate: string
  technologies: string
  stages: number[]
}

export default function NewProjectPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [config, setConfig] = useState<ProjectConfig>({
    name: '',
    clientName: '',
    startDate: '',
    endDate: '',
    technologies: '',
    stages: [1, 2, 3, 4, 5, 6, 7],
  })
  const [generatingStage, setGeneratingStage] = useState<number | null>(null)
  const [completedStages, setCompletedStages] = useState<number[]>([])
  const [progress, setProgress] = useState(0)

  const handleFilesUploaded = (files: File[]) => {
    setUploadedFiles((prev) => [...prev, ...files])
  }

  const handleNext = async () => {
    if (currentStep === 2) {
      // Start generating
      setCurrentStep(3)
      await simulateGeneration()
    } else if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const simulateGeneration = async () => {
    // Simulate document generation
    const stages = config.stages
    for (let i = 0; i < stages.length; i++) {
      setGeneratingStage(stages[i])
      setProgress(Math.round(((i + 0.5) / stages.length) * 100))

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setCompletedStages((prev) => [...prev, stages[i]])
      setProgress(Math.round(((i + 1) / stages.length) * 100))
    }

    setGeneratingStage(null)
    setProgress(100)

    // Move to export step
    setTimeout(() => {
      setCurrentStep(4)
    }, 500)
  }

  const handleDownloadDocx = () => {
    // TODO: Implement actual download
    alert('Downloading DOCX...')
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return uploadedFiles.length > 0
      case 2:
        return config.name && config.clientName && config.stages.length > 0
      case 3:
        return completedStages.length === config.stages.length
      default:
        return true
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <UploadZone onFilesUploaded={handleFilesUploaded} />
      case 2:
        return <ConfigForm config={config} onChange={setConfig} />
      case 3:
        return (
          <DocumentPreview
            projectName={config.name}
            clientName={config.clientName}
            stages={config.stages}
            generatingStage={generatingStage}
            completedStages={completedStages}
            progress={progress}
          />
        )
      case 4:
        return (
          <ExportPanel
            projectName={config.name}
            stageCount={config.stages.length}
            imageCount={0}
            pageCount={18}
            fileSize="2.4 MB"
            onDownloadDocx={handleDownloadDocx}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="h-[calc(100vh-7rem)]">
      <div className="flex h-full gap-6">
        {/* Left Panel */}
        <div className="w-[400px] flex-shrink-0 flex flex-col">
          {/* Stepper */}
          <Stepper currentStep={currentStep} onStepClick={setCurrentStep} />

          {/* Chat Panel */}
          <div className="flex-1 min-h-0">
            <ChatPanel
              projectContext={{
                step: currentStep,
                files: uploadedFiles.map((f) => f.name),
                config,
              }}
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Content */}
          <div className="flex-1 bg-white rounded-xl border p-6 overflow-auto">
            {renderStepContent()}
          </div>

          {/* Navigation */}
          {currentStep < 4 && (
            <div className="flex items-center justify-between mt-4">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed() || (currentStep === 3 && generatingStage !== null)}
              >
                {currentStep === 2 ? 'Tạo hồ sơ' : 'Tiếp tục'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
