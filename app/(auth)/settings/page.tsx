'use client'

import { useSession } from 'next-auth/react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ApiKeysSection } from '@/components/settings/api-keys-section'
import { User, Palette, FileText, Upload, Key } from 'lucide-react'

export default function SettingsPage() {
  const { data: session } = useSession()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading text-2xl font-bold text-slate-900">
          Cài đặt
        </h1>
        <p className="text-slate-600 mt-1">
          Quản lý tài khoản và tùy chỉnh của bạn
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" />
            Hồ sơ
          </TabsTrigger>
          <TabsTrigger value="brand" className="gap-2">
            <Palette className="h-4 w-4" />
            Thương hiệu
          </TabsTrigger>
          <TabsTrigger value="api-keys" className="gap-2">
            <Key className="h-4 w-4" />
            API Keys
          </TabsTrigger>
          <TabsTrigger value="templates" className="gap-2">
            <FileText className="h-4 w-4" />
            Templates
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cá nhân</CardTitle>
              <CardDescription>
                Cập nhật thông tin tài khoản của bạn
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                {session?.user?.image ? (
                  <img
                    src={session.user.image}
                    alt="Avatar"
                    className="h-20 w-20 rounded-full"
                  />
                ) : (
                  <div className="h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-2xl font-medium text-primary-600">
                      {session?.user?.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                )}
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Thay đổi avatar
                </Button>
              </div>

              <div className="grid gap-4 max-w-md">
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">
                    Họ và tên
                  </label>
                  <Input defaultValue={session?.user?.name || ''} />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    defaultValue={session?.user?.email || ''}
                    disabled
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Email không thể thay đổi
                  </p>
                </div>
              </div>

              <Button>Lưu thay đổi</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Brand Tab */}
        <TabsContent value="brand">
          <Card>
            <CardHeader>
              <CardTitle>Tùy chỉnh thương hiệu</CardTitle>
              <CardDescription>
                Thêm logo và màu sắc của công ty vào hồ sơ xuất ra
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-2">
                  Logo công ty
                </label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-40 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                    Chưa có logo
                  </div>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload logo
                  </Button>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Khuyến nghị: PNG hoặc SVG, tối đa 2MB
                </p>
              </div>

              <div className="max-w-xs">
                <label className="text-sm font-medium text-slate-700 block mb-2">
                  Màu chủ đạo
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    defaultValue="#2563EB"
                    className="h-10 w-10 rounded cursor-pointer"
                  />
                  <Input defaultValue="#2563EB" className="flex-1" />
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium text-slate-900 mb-2">Preview</h4>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-20 bg-slate-200 rounded" />
                    <div>
                      <div className="h-4 w-32 bg-primary-600 rounded" />
                      <div className="h-3 w-24 bg-slate-300 rounded mt-2" />
                    </div>
                  </div>
                </div>
              </div>

              <Button>Lưu thay đổi</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API Keys Tab */}
        <TabsContent value="api-keys">
          <Card>
            <CardContent className="pt-6">
              <ApiKeysSection />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Templates đã lưu</CardTitle>
              <CardDescription>
                Quản lý các template hồ sơ của bạn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-slate-500">
                <FileText className="h-12 w-12 mx-auto mb-4 text-slate-300" />
                <p>Chưa có template nào</p>
                <p className="text-sm mt-1">
                  Templates sẽ được tự động lưu khi bạn tạo hồ sơ
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
