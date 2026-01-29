'use client'

import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { STAGE_NAMES } from '@/lib/utils'

interface ProjectConfig {
  name: string
  clientName: string
  startDate: string
  endDate: string
  technologies: string
  stages: number[]
}

interface ConfigFormProps {
  config: ProjectConfig
  onChange: (config: ProjectConfig) => void
}

export function ConfigForm({ config, onChange }: ConfigFormProps) {
  const handleInputChange = (field: keyof ProjectConfig, value: string) => {
    onChange({ ...config, [field]: value })
  }

  const handleStageToggle = (stage: number) => {
    const newStages = config.stages.includes(stage)
      ? config.stages.filter((s) => s !== stage)
      : [...config.stages, stage].sort()
    onChange({ ...config, stages: newStages })
  }

  return (
    <div className="space-y-6">
      {/* Project Info */}
      <div className="space-y-4">
        <h3 className="font-medium text-slate-900">Thông tin dự án</h3>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-2">
            Tên phần mềm <span className="text-red-500">*</span>
          </label>
          <Input
            value={config.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Ví dụ: Hệ thống quản lý kho ABC"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-2">
            Tên khách hàng <span className="text-red-500">*</span>
          </label>
          <Input
            value={config.clientName}
            onChange={(e) => handleInputChange('clientName', e.target.value)}
            placeholder="Ví dụ: Công ty TNHH ABC"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-2">
              Ngày bắt đầu
            </label>
            <Input
              type="month"
              value={config.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-2">
              Ngày kết thúc
            </label>
            <Input
              type="month"
              value={config.endDate}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-2">
            Công nghệ sử dụng
          </label>
          <Input
            value={config.technologies}
            onChange={(e) => handleInputChange('technologies', e.target.value)}
            placeholder="Ví dụ: React, Node.js, PostgreSQL"
          />
        </div>
      </div>

      {/* Stage Selection */}
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-slate-900">Chọn công đoạn cần tạo</h3>
          <p className="text-sm text-slate-500 mt-1">
            Công đoạn 1 hoặc 2 là bắt buộc theo TT13/2020
          </p>
        </div>

        <div className="space-y-3">
          {Object.entries(STAGE_NAMES).map(([stage, name]) => {
            const stageNum = parseInt(stage)
            const isRequired = stageNum <= 2
            const isChecked = config.stages.includes(stageNum)

            return (
              <label
                key={stage}
                className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => handleStageToggle(stageNum)}
                  disabled={isRequired && isChecked && config.stages.filter(s => s <= 2).length === 1}
                />
                <div className="flex-1">
                  <span className="text-sm font-medium text-slate-700">
                    Công đoạn {stage}: {name}
                  </span>
                  {isRequired && (
                    <span className="ml-2 text-xs text-primary-600 font-medium">
                      Bắt buộc
                    </span>
                  )}
                </div>
              </label>
            )
          })}
        </div>
      </div>
    </div>
  )
}
