'use client'

import { cn, STAGE_NAMES } from '@/lib/utils'
import { Check, Loader2, Circle } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

interface DocumentPreviewProps {
  projectName: string
  clientName: string
  stages: number[]
  generatingStage: number | null
  completedStages: number[]
  progress: number
}

export function DocumentPreview({
  projectName,
  clientName,
  stages,
  generatingStage,
  completedStages,
  progress,
}: DocumentPreviewProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Document Preview Frame */}
      <div className="flex-1 bg-slate-100 rounded-xl p-6 overflow-auto">
        <div className="bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
          {/* Cover Page Preview */}
          <div className="p-8 border-b">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-lg flex items-center justify-center">
                <span className="text-slate-400 text-xs">Logo</span>
              </div>
              <div className="border-2 border-primary-600 p-6 rounded">
                <h1 className="font-heading text-xl font-bold text-slate-900">
                  HỒ SƠ CHỨNG MINH QUY TRÌNH
                </h1>
                <h2 className="font-heading text-lg font-bold text-slate-900 mt-1">
                  SẢN XUẤT PHẦN MỀM
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Theo Thông tư 13/2020/TT-BTTTT
                </p>
              </div>
              <div className="text-left space-y-2 mt-6">
                <p className="text-sm">
                  <span className="text-slate-500">Tên sản phẩm:</span>{' '}
                  <span className="font-medium">{projectName || '...'}</span>
                </p>
                <p className="text-sm">
                  <span className="text-slate-500">Khách hàng:</span>{' '}
                  <span className="font-medium">{clientName || '...'}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Stages Preview */}
          <div className="p-6">
            <h3 className="font-medium text-slate-900 mb-4">Nội dung hồ sơ</h3>
            <div className="space-y-2">
              {stages.map((stage) => {
                const isCompleted = completedStages.includes(stage)
                const isGenerating = generatingStage === stage

                return (
                  <div
                    key={stage}
                    className={cn(
                      'flex items-center gap-3 p-3 rounded-lg',
                      isCompleted && 'bg-primary-50',
                      isGenerating && 'bg-primary-50'
                    )}
                  >
                    <div
                      className={cn(
                        'h-6 w-6 rounded-full flex items-center justify-center',
                        isCompleted && 'bg-primary-500 text-white',
                        isGenerating && 'bg-primary-500 text-white',
                        !isCompleted && !isGenerating && 'bg-slate-200'
                      )}
                    >
                      {isCompleted ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : isGenerating ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <Circle className="h-3 w-3" />
                      )}
                    </div>
                    <span
                      className={cn(
                        'text-sm',
                        isCompleted && 'text-primary-700',
                        isGenerating && 'text-primary-700',
                        !isCompleted && !isGenerating && 'text-slate-500'
                      )}
                    >
                      Công đoạn {stage}: {STAGE_NAMES[stage]}
                      {isGenerating && (
                        <span className="ml-2 text-xs">(đang tạo...)</span>
                      )}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {progress > 0 && progress < 100 && (
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Đang tạo hồ sơ...</span>
            <span className="font-medium text-slate-900">{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>
      )}
    </div>
  )
}
