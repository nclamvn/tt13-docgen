'use client'

import { cn } from '@/lib/utils'
import { Check, Upload, Settings, Eye, Download } from 'lucide-react'

const steps = [
  { id: 1, name: 'Upload', icon: Upload },
  { id: 2, name: 'Cấu hình', icon: Settings },
  { id: 3, name: 'Xem lại', icon: Eye },
  { id: 4, name: 'Xuất file', icon: Download },
]

interface StepperProps {
  currentStep: number
  onStepClick?: (step: number) => void
}

export function Stepper({ currentStep, onStepClick }: StepperProps) {
  return (
    <nav aria-label="Progress" className="mb-6">
      <ol className="space-y-2">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep
          const isCurrent = step.id === currentStep
          const isPending = step.id > currentStep

          return (
            <li key={step.name}>
              <button
                onClick={() => onStepClick?.(step.id)}
                disabled={isPending}
                className={cn(
                  'w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors',
                  isCompleted && 'bg-primary-50 hover:bg-primary-100',
                  isCurrent && 'bg-primary-100',
                  isPending && 'opacity-50 cursor-not-allowed'
                )}
              >
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium',
                    isCompleted && 'bg-primary-500 text-white',
                    isCurrent && 'bg-primary-600 text-white',
                    isPending && 'bg-slate-200 text-slate-500'
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <step.icon className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p
                    className={cn(
                      'text-sm font-medium',
                      isCompleted && 'text-primary-700',
                      isCurrent && 'text-primary-700',
                      isPending && 'text-slate-500'
                    )}
                  >
                    Bước {step.id}: {step.name}
                  </p>
                </div>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
