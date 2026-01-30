'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, FileText, Sparkles, LayoutDashboard, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-primary-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">
                AI-Powered Business Tools Platform
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-center font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-primary-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
              TCdata Tools
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl lg:text-6xl font-medium">
              Bộ công cụ AI cao cấp
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-center text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Từ hồ sơ <span className="text-primary-400 font-semibold">TT13/2020</span> đến thiết kế{' '}
            <span className="text-amber-400 font-semibold">Power BI Dashboard</span> -
            tự động hóa với AI, tiết kiệm 80% thời gian.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-base bg-gradient-to-r from-primary-500 to-emerald-500 hover:from-primary-600 hover:to-emerald-600 text-white shadow-2xl shadow-primary-500/30 border-0"
            >
              <Link href="#products">
                Khám phá sản phẩm
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-14 px-8 text-base border-primary-500 text-slate-300 hover:bg-primary-500/10 hover:text-white hover:border-primary-400"
            >
              <Link href="#demo">
                Xem demo
              </Link>
            </Button>
          </motion.div>

          {/* Two Product Cards Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-emerald-500/10 to-amber-500/20 rounded-3xl blur-2xl" />

            {/* Products Preview Grid */}
            <div className="relative grid md:grid-cols-2 gap-6">
              {/* TT13 DocGen Card */}
              <motion.div
                className="rounded-2xl overflow-hidden border border-primary-500/20 bg-slate-900/80 backdrop-blur-xl shadow-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-slate-500">TT13 DocGen</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-500 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Hồ sơ TT13/2020</h3>
                      <p className="text-xs text-primary-400">AI Copilot</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {['Upload tài liệu', 'AI phân tích & tạo 7 công đoạn', 'Export DOCX chuyên nghiệp'].map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="h-5 w-5 rounded-full bg-primary-500/20 flex items-center justify-center text-[10px] text-primary-400 font-medium">
                          {i + 1}
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Power BI Studio Card */}
              <motion.div
                className="rounded-2xl overflow-hidden border border-amber-500/20 bg-slate-900/80 backdrop-blur-xl shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-slate-500">Power BI Studio</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <LayoutDashboard className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Layout Designer</h3>
                      <p className="text-xs text-amber-400">12+ Templates</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {['Chọn template ngành nghề', 'Drag & drop visual', 'Export JSON cho Power BI'].map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px] text-amber-400 font-medium">
                          {i + 1}
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { value: '80%', label: 'TIẾT KIỆM THỜI GIAN' },
              { value: '2', label: 'SẢN PHẨM AI' },
              { value: '12+', label: 'TEMPLATES' },
              { value: '24/7', label: 'AI HỖ TRỢ' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-primary-800 mt-1 tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  )
}
