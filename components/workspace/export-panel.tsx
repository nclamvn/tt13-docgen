'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Download, FileText, Plus, Home } from 'lucide-react'
import Link from 'next/link'

interface ExportPanelProps {
  projectName: string
  stageCount: number
  imageCount: number
  pageCount: number
  fileSize: string
  onDownloadDocx: () => void
  onDownloadPdf?: () => void
}

export function ExportPanel({
  projectName,
  stageCount,
  imageCount,
  pageCount,
  fileSize,
  onDownloadDocx,
  onDownloadPdf,
}: ExportPanelProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-8">
        <div className="h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
          <Check className="h-10 w-10 text-primary-600" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">
          Hoàn thành!
        </h2>
        <p className="text-slate-600">
          Hồ sơ TT13/2020 đã sẵn sàng để tải về
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-lg bg-primary-100 flex items-center justify-center">
              <FileText className="h-7 w-7 text-primary-600" />
            </div>
            <div>
              <h3 className="font-medium text-slate-900">
                HoSo_TT13_{projectName.replace(/\s+/g, '_')}.docx
              </h3>
              <p className="text-sm text-slate-500">{fileSize}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-slate-900">{stageCount}</p>
              <p className="text-xs text-slate-500">Công đoạn</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-slate-900">{imageCount}</p>
              <p className="text-xs text-slate-500">Hình ảnh</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-2xl font-bold text-slate-900">{pageCount}</p>
              <p className="text-xs text-slate-500">Trang</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full" size="lg" onClick={onDownloadDocx}>
              <Download className="mr-2 h-4 w-4" />
              Tải DOCX
            </Button>
            <Button
              variant="outline"
              className="w-full"
              size="lg"
              onClick={onDownloadPdf}
              disabled={!onDownloadPdf}
            >
              <Download className="mr-2 h-4 w-4" />
              Tải PDF
              {!onDownloadPdf && (
                <span className="ml-2 text-xs text-slate-400">(Sắp có)</span>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-4 mt-8 text-sm">
        <div className="flex items-center gap-2 text-primary-600">
          <Check className="h-4 w-4" />
          <span>Đủ điều kiện TT13/2020</span>
        </div>
        <div className="flex items-center gap-2 text-primary-600">
          <Check className="h-4 w-4" />
          <span>Đã lưu vào dự án</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <Button variant="outline" asChild>
          <Link href="/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            Tạo hồ sơ mới
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/dashboard">
            <Home className="mr-2 h-4 w-4" />
            Về Dashboard
          </Link>
        </Button>
      </div>
    </div>
  )
}
