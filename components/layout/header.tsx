'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileText, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-emerald-500">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <span className="font-heading text-xl font-bold text-white">
            TT13 DocGen
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Tính năng
          </Link>
          <Link
            href="#demo"
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
          <Button asChild className="bg-gradient-to-r from-primary-500 to-emerald-500 hover:from-primary-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-primary-500/20">
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
            <Link
              href="#features"
              className="text-sm font-medium text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tính năng
            </Link>
            <Link
              href="#demo"
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
            <Button asChild className="w-full bg-gradient-to-r from-primary-500 to-emerald-500 text-white">
              <Link href="/login">Bắt đầu</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
