import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { FileText, Plus, Search, MoreVertical, Trash2, Edit } from 'lucide-react'
import Link from 'next/link'
import { formatDate, PROJECT_STATUS_LABELS, PROJECT_STATUS_COLORS } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'

export default async function ProjectsPage() {
  const session = await auth()

  const projects = await prisma.project.findMany({
    where: { userId: session?.user?.id },
    orderBy: { updatedAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">
            Danh sách dự án
          </h1>
          <p className="text-slate-600 mt-1">
            Quản lý tất cả hồ sơ TT13/2020 của bạn
          </p>
        </div>
        <Button asChild>
          <Link href="/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            Tạo mới
          </Link>
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input type="search" placeholder="Tìm kiếm dự án..." className="pl-10" />
        </div>
        <select className="h-11 rounded-lg border border-slate-300 px-4 text-sm">
          <option value="">Tất cả trạng thái</option>
          <option value="DRAFT">Nháp</option>
          <option value="GENERATING">Đang tạo</option>
          <option value="COMPLETED">Hoàn thành</option>
        </select>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <FileText className="h-16 w-16 text-slate-300 mb-4" />
            <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
              Chưa có dự án nào
            </h3>
            <p className="text-slate-500 mb-6 text-center max-w-md">
              Bắt đầu tạo hồ sơ TT13/2020 đầu tiên của bạn với AI Copilot
            </p>
            <Button asChild>
              <Link href="/projects/new">
                <Plus className="mr-2 h-4 w-4" />
                Tạo dự án đầu tiên
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-start justify-between pb-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      <Link
                        href={`/projects/${project.id}`}
                        className="hover:text-primary-600"
                      >
                        {project.name}
                      </Link>
                    </CardTitle>
                    <p className="text-sm text-slate-500">
                      {project.clientName || 'Chưa có khách hàng'}
                    </p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/projects/${project.id}`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Chỉnh sửa
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Xóa
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <Badge className={PROJECT_STATUS_COLORS[project.status]}>
                    {PROJECT_STATUS_LABELS[project.status]}
                  </Badge>
                  <span className="text-slate-500">
                    {formatDate(project.updatedAt)}
                  </span>
                </div>
                {project.stages && (
                  <div className="mt-3 text-xs text-slate-500">
                    {JSON.parse(project.stages).length} công đoạn
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
