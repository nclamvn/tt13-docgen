import Link from 'next/link'
import { Sparkles, FileText, LayoutDashboard } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-amber-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold">
                TC Data
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              TC Data Tools - Bộ công cụ AI cao cấp. Tự động hóa quy trình, tiết kiệm thời gian.
            </p>
            <div className="flex items-center gap-2 text-xs text-primary-400">
              <Sparkles className="h-4 w-4" />
              <span>Powered by AI Technology</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Sản phẩm</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/login" className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors">
                  <FileText className="h-4 w-4" />
                  TT13 DocGen
                </Link>
              </li>
              <li>
                <Link href="/powerbi" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors">
                  <LayoutDashboard className="h-4 w-4" />
                  Power BI Studio
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Tính năng
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Tài liệu hướng dẫn
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Pháp lý</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:support@tcdata.vn" className="text-slate-400 hover:text-primary-400 transition-colors">
                  support@tcdata.vn
                </a>
              </li>
              <li>
                <a href="https://tcdata.vn" target="_blank" rel="noopener" className="text-slate-400 hover:text-primary-400 transition-colors">
                  tcdata.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} TC Data. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Made with AI for Vietnamese Software Companies
          </p>
        </div>
      </div>
    </footer>
  )
}
