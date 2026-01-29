'use client'

import { motion } from 'framer-motion'
import { Upload, Sparkles, Download, ArrowRight, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload tài liệu',
    description:
      'Kéo thả file mô tả dự án (.txt, .docx, .pdf) và ảnh minh họa (.zip). AI sẽ tự động phân tích.',
    gradient: 'from-primary-500 to-emerald-500',
    bgGradient: 'from-primary-500/20 to-emerald-500/20',
    features: ['Hỗ trợ nhiều định dạng', 'Tự động nhận diện ảnh'],
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI tạo nội dung',
    description:
      'AI Copilot tự động tạo 7 công đoạn với nội dung chuyên nghiệp, phù hợp với loại phần mềm của bạn.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    features: ['7 công đoạn TT13/2020', 'Nội dung chuyên nghiệp'],
  },
  {
    number: '03',
    icon: Download,
    title: 'Export DOCX',
    description:
      'Tải file DOCX hoàn chỉnh với format chuẩn, ảnh minh họa, và sẵn sàng để ký đóng dấu.',
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-500/20 to-cyan-500/20',
    features: ['Format chuẩn TT13', 'Sẵn sàng in ấn'],
  },
]

export function SolutionSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Quy trình đơn giản</span>
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            3 bước để có{' '}
            <span className="bg-gradient-to-r from-primary-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              hồ sơ hoàn hảo
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Từ tài liệu thô đến hồ sơ hoàn chỉnh chỉ trong vài phút với TT13 DocGen.
            Quy trình tự động hóa hoàn toàn.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${step.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Card */}
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-primary-500/30 transition-all duration-300 overflow-hidden">
                  {/* Watermark Icon */}
                  <div className="absolute -bottom-8 -right-8 opacity-[0.07] pointer-events-none">
                    <step.icon className="h-48 w-48 text-white" />
                  </div>

                  <h3 className="relative z-10 font-heading text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="relative z-10 text-slate-400 mb-6 leading-relaxed">{step.description}</p>

                  {/* Features */}
                  <div className="relative z-10 space-y-2">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className={`h-4 w-4 bg-gradient-to-r ${step.gradient} text-white rounded-full`} />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:flex absolute top-1/2 -right-4 z-20 -translate-y-1/2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  >
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-[2px] bg-gradient-to-r from-white/20 to-white/40 rounded-full" />
                      <ArrowRight className="h-4 w-4 text-white/40" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: '2 phút', label: 'Thời gian upload' },
            { value: '5 phút', label: 'AI xử lý' },
            { value: '1 click', label: 'Export file' },
            { value: '100%', label: 'Tự động hóa' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
