import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { notFound, redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Download, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { formatDate, STAGE_NAMES, PROJECT_STATUS_LABELS, PROJECT_STATUS_COLORS } from '@/lib/utils'

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const session = await auth()
  if (!session?.user?.id) {
    redirect('/login')
  }

  const project = await prisma.project.findUnique({
    where: { id: params.id },
  })

  if (!project || project.userId !== session.user.id) {
    notFound()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="font-heading text-2xl font-bold text-slate-900">
              {project.name}
            </h1>
            <p className="text-slate-600 mt-1">
              {project.clientName || 'Chưa có khách hàng'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Badge className={PROJECT_STATUS_COLORS[project.status]}>
            {PROJECT_STATUS_LABELS[project.status]}
          </Badge>
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Chỉnh sửa
          </Button>
          <Button variant="outline" size="sm" className="text-red-600">
            <Trash2 className="mr-2 h-4 w-4" />
            Xóa
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Project Info */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Thông tin dự án</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Tên phần mềm</p>
                <p className="font-medium text-slate-900">{project.name}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Khách hàng</p>
                <p className="font-medium text-slate-900">
                  {project.clientName || '-'}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Thời gian</p>
                <p className="font-medium text-slate-900">
                  {project.startDate ? formatDate(project.startDate) : '-'} -{' '}
                  {project.endDate ? formatDate(project.endDate) : '-'}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Công nghệ</p>
                <p className="font-medium text-slate-900">
                  {project.technologies || '-'}
                </p>
              </div>
            </div>

            {project.description && (
              <div>
                <p className="text-sm text-slate-500 mb-1">Mô tả</p>
                <p className="text-slate-700">{project.description}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Download */}
        <Card>
          <CardHeader>
            <CardTitle>Tải xuống</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {project.docxUrl ? (
              <>
                <Button className="w-full" asChild>
                  <a href={project.docxUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Tải DOCX
                  </a>
                </Button>
                {project.pdfUrl && (
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.pdfUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      Tải PDF
                    </a>
                  </Button>
                )}
              </>
            ) : (
              <p className="text-sm text-slate-500 text-center py-4">
                Chưa có file xuất. Hoàn thành tạo hồ sơ để tải xuống.
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Stages */}
      <Card>
        <CardHeader>
          <CardTitle>Các công đoạn</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {(JSON.parse(project.stages) as number[]).map((stage) => (
              <div
                key={stage}
                className="p-4 rounded-lg border bg-slate-50"
              >
                <p className="font-medium text-slate-900">
                  Công đoạn {stage}
                </p>
                <p className="text-sm text-slate-500">{STAGE_NAMES[stage]}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Lịch sử</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm">
              <div className="h-2 w-2 rounded-full bg-primary-500" />
              <span className="text-slate-500">Tạo:</span>
              <span className="text-slate-700">
                {formatDate(project.createdAt)}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="h-2 w-2 rounded-full bg-primary-500" />
              <span className="text-slate-500">Cập nhật:</span>
              <span className="text-slate-700">
                {formatDate(project.updatedAt)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
