'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, FileText, Sparkles, CheckCircle, Upload, Download, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-primary-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
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
                Powered by AI - Theo Thông tư 13/2020/TT-BTTTT
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
            <span className="text-white">Biến tài liệu thô thành</span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-emerald-400 to-primary-400 bg-clip-text text-transparent">
              Hồ sơ TT13/2020
            </span>
            <br />
            <span className="text-white">chuyên nghiệp</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-center text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Giảm <span className="text-primary-400 font-semibold">80% thời gian</span> tạo hồ sơ chứng minh quy trình sản xuất phần mềm
            với AI Copilot thông minh. Upload, Generate, Export - chỉ trong vài phút.
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
              <Link href="/login">
                Bắt đầu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-14 px-8 text-base border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600"
            >
              <Link href="#demo">
                Xem cách hoạt động
              </Link>
            </Button>
          </motion.div>

          {/* App Preview - Glassmorphism Style */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-emerald-500/20 to-primary-500/20 rounded-3xl blur-2xl" />

            {/* Main Preview Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-md mx-auto rounded-lg bg-slate-700/50 px-4 py-1.5 text-sm text-slate-400 text-center">
                    app.tt13docgen.vn/workspace
                  </div>
                </div>
              </div>

              {/* App Content Preview */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Panel - Upload */}
                  <motion.div
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-5 border border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                        <Upload className="h-5 w-5 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Upload</p>
                        <p className="text-slate-500 text-xs">Bước 1</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-700/30">
                        <FileText className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-400">project_desc.docx</span>
                        <CheckCircle className="h-4 w-4 text-primary-400 ml-auto" />
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-700/30">
                        <FileText className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-400">screenshots.zip</span>
                        <CheckCircle className="h-4 w-4 text-primary-400 ml-auto" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Panel - AI Processing */}
                  <motion.div
                    className="bg-gradient-to-br from-primary-900/30 to-emerald-900/30 rounded-xl p-5 border border-primary-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-500 to-emerald-500 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">AI Copilot</p>
                        <p className="text-primary-400 text-xs">Đang xử lý...</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((stage) => (
                        <div key={stage} className="flex items-center gap-3">
                          <motion.div
                            className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + stage * 0.1 }}
                          >
                            <CheckCircle className="h-4 w-4 text-primary-400" />
                          </motion.div>
                          <motion.div
                            className="flex-1 h-2 bg-slate-700/50 rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.5, delay: 0.8 + stage * 0.1 }}
                          >
                            <div className="h-full bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full" style={{ width: '100%' }} />
                          </motion.div>
                          <span className="text-xs text-slate-500">CĐ{stage}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Panel - Export */}
                  <motion.div
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-5 border border-white/5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <Download className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Export</p>
                        <p className="text-slate-500 text-xs">Bước 3</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-br from-emerald-500/10 to-primary-500/10 border border-emerald-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">HoSo_TT13.docx</p>
                          <p className="text-emerald-400 text-xs">Sẵn sàng tải về</p>
                        </div>
                      </div>
                      <Button size="sm" className="w-full bg-gradient-to-r from-primary-500 to-emerald-500 text-white text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        Tải xuống
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { value: '80%', label: 'Tiết kiệm thời gian' },
              { value: '7', label: 'Công đoạn TT13' },
              { value: '100%', label: 'Tuân thủ quy định' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 to-emerald-700 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient - transitions to ProblemSection (white bg) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  )
}
