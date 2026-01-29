import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  Clock,
  CheckCircle,
  Plus,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  Shield,
  FolderOpen,
} from 'lucide-react'
import Link from 'next/link'
import { formatDate, PROJECT_STATUS_LABELS, PROJECT_STATUS_COLORS } from '@/lib/utils'

export default async function DashboardPage() {
  const session = await auth()

  const [projectCount, completedCount, recentProjects] = await Promise.all([
    prisma.project.count({
      where: { userId: session?.user?.id },
    }),
    prisma.project.count({
      where: { userId: session?.user?.id, status: 'COMPLETED' },
    }),
    prisma.project.findMany({
      where: { userId: session?.user?.id },
      orderBy: { updatedAt: 'desc' },
      take: 5,
    }),
  ])

  const hoursSaved = completedCount * 80

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-8 text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <p className="text-primary-100 text-sm font-medium">Xin chào trở lại</p>
              <h1 className="font-heading text-2xl font-bold">
                {session?.user?.name?.split(' ')[0] || 'bạn'}!
              </h1>
            </div>
          </div>
          <p className="text-primary-100 mt-4 max-w-xl">
            Chào mừng đến với TT13 DocGen - nền tảng tạo hồ sơ TT13/2020 thông minh với AI.
            Tiết kiệm thời gian, tăng hiệu quả công việc.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="relative overflow-hidden border-0 shadow-lg shadow-primary-500/10 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Tổng hồ sơ</p>
                <p className="text-4xl font-bold text-slate-900">{projectCount}</p>
                <p className="text-xs text-slate-400 mt-1">Hồ sơ đã tạo</p>
              </div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <FileText className="h-7 w-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg shadow-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Hoàn thành</p>
                <p className="text-4xl font-bold text-slate-900">{completedCount}</p>
                <p className="text-xs text-slate-400 mt-1">Sẵn sàng xuất file</p>
              </div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <CheckCircle className="h-7 w-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg shadow-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Giờ tiết kiệm</p>
                <p className="text-4xl font-bold text-slate-900">{hoursSaved}</p>
                <p className="text-xs text-slate-400 mt-1">~{Math.round(hoursSaved / 8)} ngày làm việc</p>
              </div>
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Action CTA */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-primary-100 via-primary-50 to-emerald-50 overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-primary-500 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                  Bắt đầu ngay
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2 text-slate-800">
                Tạo hồ sơ TT13/2020 mới
              </h3>
              <p className="text-slate-600 text-sm mb-6 max-w-md">
                Upload tài liệu dự án và để AI tự động phân tích, tạo nội dung chuyên nghiệp
                cho 7 công đoạn theo quy định.
              </p>
              <div className="flex items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/30"
                >
                  <Link href="/projects/new">
                    <Plus className="mr-2 h-5 w-5" />
                    Tạo hồ sơ mới
                  </Link>
                </Button>
                <Link
                  href="/docs"
                  className="text-sm text-primary-700 hover:text-primary-800 flex items-center gap-1 transition-colors font-medium"
                >
                  Xem hướng dẫn
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-primary-200/50 to-transparent">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-300/30 rounded-full blur-3xl" />
                <div className="relative grid grid-cols-2 gap-3">
                  <div className="h-20 w-20 rounded-xl bg-white/70 backdrop-blur border border-primary-200 flex items-center justify-center shadow-sm">
                    <FileText className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="h-20 w-20 rounded-xl bg-white/70 backdrop-blur border border-primary-200 flex items-center justify-center shadow-sm">
                    <Sparkles className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="h-20 w-20 rounded-xl bg-white/70 backdrop-blur border border-primary-200 flex items-center justify-center shadow-sm">
                    <Shield className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="h-20 w-20 rounded-xl bg-white/70 backdrop-blur border border-primary-200 flex items-center justify-center shadow-sm">
                    <CheckCircle className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Projects */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div>
            <CardTitle className="text-xl font-bold">Dự án gần đây</CardTitle>
            <p className="text-sm text-slate-500 mt-1">Quản lý và theo dõi tiến độ các hồ sơ</p>
          </div>
          {recentProjects.length > 0 && (
            <Button variant="outline" size="sm" asChild className="border-primary-200 text-primary-600 hover:bg-primary-50">
              <Link href="/projects">
                Xem tất cả
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </CardHeader>
        <CardContent>
          {recentProjects.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-2xl" />
                <div className="relative h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                  <FolderOpen className="h-12 w-12 text-primary-500" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Chưa có dự án nào</h3>
              <p className="text-slate-500 mb-6 max-w-sm mx-auto">
                Bắt đầu tạo hồ sơ TT13/2020 đầu tiên của bạn với sự hỗ trợ của AI Copilot
              </p>
              <Button asChild size="lg" className="shadow-lg shadow-primary-500/20">
                <Link href="/projects/new">
                  <Plus className="mr-2 h-5 w-5" />
                  Tạo dự án đầu tiên
                </Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {recentProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-transparent transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-100 transition-colors">
                      <FileText className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">
                        {project.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-slate-500">
                          {project.clientName || 'Chưa có khách hàng'}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-sm text-slate-400">
                          {formatDate(project.updatedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={PROJECT_STATUS_COLORS[project.status]}>
                      {PROJECT_STATUS_LABELS[project.status]}
                    </Badge>
                    <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tips Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-primary-50 to-white">
          <CardContent className="p-6">
            <div className="h-10 w-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
              <FileText className="h-5 w-5 text-primary-600" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Đặt tên ảnh thông minh</h4>
            <p className="text-sm text-slate-600">
              Đặt tên ảnh theo quy tắc <code className="bg-slate-100 px-1 rounded text-primary-600 text-xs">cd1-xxx.png</code> để AI tự động chèn đúng công đoạn
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="p-6">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <Sparkles className="h-5 w-5 text-emerald-600" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">Mô tả chi tiết</h4>
            <p className="text-sm text-slate-600">
              Mô tả dự án càng chi tiết, AI sẽ tạo nội dung càng chính xác và chuyên nghiệp
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-amber-50 to-white">
          <CardContent className="p-6">
            <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
              <Zap className="h-5 w-5 text-amber-600" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2">AI Copilot hỗ trợ</h4>
            <p className="text-sm text-slate-600">
              Chat với AI để điều chỉnh nội dung hoặc hỏi đáp về quy định TT13/2020
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
