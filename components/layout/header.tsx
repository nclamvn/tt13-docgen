'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles, Menu, X, FileText, LayoutDashboard, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    name: 'TT13 DocGen',
    description: 'Tạo hồ sơ TT13/2020 với AI',
    icon: FileText,
    href: '/login',
    color: 'text-primary-400',
    bg: 'bg-primary-500/10',
  },
  {
    name: 'Power BI Studio',
    description: 'Thiết kế layout Power BI',
    icon: LayoutDashboard,
    href: '/powerbi',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-amber-500">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-heading text-xl font-bold text-white">
            TC Data
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Products Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              onClick={() => setProductsOpen(!productsOpen)}
              onBlur={() => setTimeout(() => setProductsOpen(false), 150)}
            >
              Sản phẩm
              <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="flex items-center gap-3 p-4 hover:bg-white/5 transition-colors"
                    onClick={() => setProductsOpen(false)}
                  >
                    <div className={`h-10 w-10 rounded-lg ${product.bg} flex items-center justify-center`}>
                      <product.icon className={`h-5 w-5 ${product.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{product.name}</p>
                      <p className="text-xs text-slate-500">{product.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#features"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Tính năng
          </Link>
          <Link
            href="/#demo"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Demo
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Tài liệu
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" asChild className="text-slate-400 hover:text-white hover:bg-white/5">
            <Link href="/login">Đăng nhập</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-primary-500 to-amber-500 hover:from-primary-600 hover:to-amber-600 text-white border-0 shadow-lg shadow-primary-500/20">
            <Link href="/login">
              Bắt đầu
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl">
          <nav className="container py-4 flex flex-col space-y-4">
            <p className="text-xs text-slate-600 uppercase tracking-wider">Sản phẩm</p>
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="flex items-center gap-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className={`h-8 w-8 rounded-lg ${product.bg} flex items-center justify-center`}>
                  <product.icon className={`h-4 w-4 ${product.color}`} />
                </div>
                <span className="text-sm font-medium text-white">{product.name}</span>
              </Link>
            ))}
            <hr className="border-white/10" />
            <Link
              href="/#features"
              className="text-sm font-medium text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tính năng
            </Link>
            <Link
              href="/#demo"
              className="text-sm font-medium text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tài liệu
            </Link>
            <hr className="border-white/10" />
            <Link
              href="/login"
              className="text-sm font-medium text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Đăng nhập
            </Link>
            <Button asChild className="w-full bg-gradient-to-r from-primary-500 to-amber-500 text-white">
              <Link href="/login">Bắt đầu</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
