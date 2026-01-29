'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  Zap,
  Shield,
  Clock,
  Download,
  MessageSquare,
  Image,
} from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI Copilot',
    subtitle: 'thông minh',
    description: 'Tự động phân tích và tạo nội dung chuyên nghiệp theo TT13/2020.',
    stat: 'GPT-4',
    statLabel: 'Powered by',
  },
  {
    icon: Clock,
    title: '80%',
    subtitle: 'tiết kiệm',
    description: 'Từ 2 tuần xuống còn vài giờ. Quy trình tự động hoàn toàn.',
    stat: '2h',
    statLabel: 'Trung bình',
  },
  {
    icon: Shield,
    title: '100%',
    subtitle: 'tuân thủ',
    description: 'Đầy đủ 7 công đoạn theo Thông tư 13/2020/TT-BTTTT.',
    stat: '7',
    statLabel: 'Công đoạn',
  },
  {
    icon: Image,
    title: 'Auto',
    subtitle: 'chèn ảnh',
    description: 'Đặt tên ảnh theo quy tắc, AI tự động chèn đúng vị trí.',
    stat: 'Smart',
    statLabel: 'Detection',
  },
  {
    icon: MessageSquare,
    title: 'Chat',
    subtitle: '& điều chỉnh',
    description: 'Hỏi đáp và điều chỉnh nội dung với AI Copilot.',
    stat: '24/7',
    statLabel: 'Hỗ trợ',
  },
  {
    icon: Download,
    title: 'Export',
    subtitle: 'DOCX chuẩn',
    description: 'File hoàn chỉnh với format đẹp, sẵn sàng in ấn.',
    stat: '.docx',
    statLabel: 'Format',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-6">
            <Zap className="h-4 w-4 text-primary-400" />
            Tính năng
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Mọi thứ bạn cần,
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">
              không gì thừa
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Thiết kế tối giản. Hiệu quả tối đa.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-full bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
                {/* Watermark Icon */}
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] pointer-events-none">
                  <feature.icon className="h-40 w-40 text-white" />
                </div>

                {/* Stat Badge */}
                <div className="absolute top-6 right-6 text-right">
                  <p className="text-2xl lg:text-3xl font-bold text-white/20 group-hover:text-primary-400/40 transition-colors duration-500">
                    {feature.stat}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-white/20">
                    {feature.statLabel}
                  </p>
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-primary-500/20 group-hover:to-emerald-500/20 transition-all duration-500">
                    <feature.icon className="h-6 w-6 text-white/60 group-hover:text-primary-400 transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-white mb-1">
                    {feature.title}
                    <span className="text-white/40 font-normal ml-2">{feature.subtitle}</span>
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-3">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
