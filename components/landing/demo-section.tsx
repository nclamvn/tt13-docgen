'use client'

import { motion } from 'framer-motion'
import { Play, Sparkles, FileText, Upload, Download, CheckCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const demoSteps = [
  {
    id: 1,
    title: 'Upload tài liệu dự án',
    description: 'Kéo thả file mô tả và ảnh minh họa',
    icon: Upload,
  },
  {
    id: 2,
    title: 'AI phân tích & tạo nội dung',
    description: 'Tự động tạo 7 công đoạn TT13/2020',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Xem trước & chỉnh sửa',
    description: 'Chat với AI để điều chỉnh nội dung',
    icon: FileText,
  },
  {
    id: 4,
    title: 'Export file DOCX',
    description: 'Tải về hồ sơ hoàn chỉnh',
    icon: Download,
  },
]

export function DemoSection() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section id="demo" className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Play className="h-4 w-4" />
            Xem Demo
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Xem TT13 DocGen{' '}
            <span className="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
              hoạt động
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Quy trình từ upload đến export hồ sơ hoàn chỉnh chỉ trong vài phút.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Steps Navigation */}
            <motion.div
              className="lg:col-span-2 space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {demoSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                    activeStep === step.id
                      ? 'bg-gradient-to-r from-primary-500 to-emerald-500 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-white border border-slate-100 hover:border-primary-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-12 w-12 rounded-xl flex items-center justify-center transition-colors ${
                        activeStep === step.id
                          ? 'bg-white/20'
                          : 'bg-primary-50 group-hover:bg-primary-100'
                      }`}
                    >
                      <step.icon
                        className={`h-6 w-6 ${
                          activeStep === step.id ? 'text-white' : 'text-primary-600'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold ${
                          activeStep === step.id ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          activeStep === step.id ? 'text-white/80' : 'text-slate-500'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                    {activeStep === step.id && (
                      <ArrowRight className="h-5 w-5 text-white" />
                    )}
                  </div>
                </button>
              ))}
            </motion.div>

            {/* Demo Preview */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-emerald-500/20 to-primary-500/20 rounded-3xl blur-2xl" />

                {/* Preview Container */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="max-w-md mx-auto rounded-lg bg-white px-4 py-1.5 text-sm text-slate-500 text-center border border-slate-200">
                        app.tt13docgen.vn/workspace
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-white p-8">
                    {/* Step 1: Upload */}
                    {activeStep === 1 && (
                      <motion.div
                        className="h-full flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center">
                          <div className="h-32 w-32 mx-auto mb-6 rounded-2xl border-2 border-dashed border-primary-300 bg-primary-50 flex items-center justify-center">
                            <Upload className="h-12 w-12 text-primary-400" />
                          </div>
                          <p className="text-slate-600 mb-2">Kéo thả file vào đây</p>
                          <p className="text-sm text-slate-400">.docx, .pdf, .txt, .zip</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: AI Processing */}
                    {activeStep === 2 && (
                      <motion.div
                        className="h-full flex flex-col items-center justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-20 w-20 mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-emerald-500 flex items-center justify-center animate-pulse">
                          <Sparkles className="h-10 w-10 text-white" />
                        </div>
                        <p className="text-slate-900 font-semibold mb-4">AI đang tạo nội dung...</p>
                        <div className="w-64 space-y-2">
                          {[1, 2, 3, 4, 5].map((stage) => (
                            <div key={stage} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-primary-500" />
                              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-primary-500 to-emerald-500"
                                  initial={{ width: 0 }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 0.5, delay: stage * 0.2 }}
                                />
                              </div>
                              <span className="text-xs text-slate-500">CĐ{stage}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Preview */}
                    {activeStep === 3 && (
                      <motion.div
                        className="h-full grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white rounded-xl border border-slate-200 p-4 overflow-hidden">
                          <div className="text-sm font-semibold text-slate-900 mb-2">Công đoạn 1</div>
                          <div className="space-y-1">
                            {[1, 2, 3, 4].map((line) => (
                              <div key={line} className="h-2 bg-slate-100 rounded" style={{ width: `${100 - line * 15}%` }} />
                            ))}
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary-50 to-emerald-50 rounded-xl border border-primary-200 p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="h-4 w-4 text-primary-500" />
                            <span className="text-sm font-semibold text-primary-700">AI Copilot</span>
                          </div>
                          <div className="bg-white rounded-lg p-3 text-sm text-slate-600">
                            Hãy cho tôi biết bạn muốn điều chỉnh gì...
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Export */}
                    {activeStep === 4 && (
                      <motion.div
                        className="h-full flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center">
                          <div className="h-24 w-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                            <FileText className="h-12 w-12 text-white" />
                          </div>
                          <p className="text-slate-900 font-semibold mb-2">HoSo_TT13_DuAn.docx</p>
                          <p className="text-sm text-emerald-600 mb-4">Sẵn sàng tải về</p>
                          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-emerald-500 text-white font-medium">
                            <Download className="h-5 w-5" />
                            Tải xuống
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
