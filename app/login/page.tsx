'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, ArrowLeft, Sparkles, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<'google' | 'demo' | null>(null)

  const handleGoogleLogin = () => {
    setIsLoading('google')
    signIn('google', { callbackUrl: '/dashboard' })
  }

  const handleDemoLogin = async () => {
    setIsLoading('demo')
    await signIn('demo', { callbackUrl: '/dashboard' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading text-2xl font-bold text-slate-900">
              TT13 DocGen
            </span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Đăng nhập</CardTitle>
            <CardDescription>
              Đăng nhập để tạo hồ sơ TT13/2020 với AI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Demo Account - Highlighted */}
            <Button
              className="w-full h-12 text-base bg-primary-600 hover:bg-primary-700"
              onClick={handleDemoLogin}
              disabled={isLoading !== null}
            >
              {isLoading === 'demo' ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-5 w-5" />
              )}
              Dùng thử với Demo Account
            </Button>

            <p className="text-center text-xs text-slate-500">
              Không cần đăng ký, trải nghiệm ngay tất cả tính năng
            </p>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500">
                  hoặc đăng nhập với
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full h-12 text-base"
              onClick={handleGoogleLogin}
              disabled={isLoading !== null}
            >
              {isLoading === 'google' ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              )}
              Google
            </Button>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại trang chủ
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Bằng việc đăng nhập, bạn đồng ý với{' '}
          <Link href="/terms" className="underline hover:text-slate-900">
            Điều khoản sử dụng
          </Link>{' '}
          và{' '}
          <Link href="/privacy" className="underline hover:text-slate-900">
            Chính sách bảo mật
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
