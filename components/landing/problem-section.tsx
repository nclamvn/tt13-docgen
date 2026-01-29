'use client'

import { motion } from 'framer-motion'
import { Clock, FileWarning, AlertTriangle } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Tốn quá nhiều thời gian',
    description: 'Tạo hồ sơ TT13/2020 thủ công đòi hỏi rất nhiều thời gian cho việc viết, format và kiểm tra.',
    stat: '2-4',
    statUnit: 'tuần',
    statLabel: 'thời gian trung bình',
  },
  {
    icon: FileWarning,
    title: 'Dễ sai sót',
    description: 'Format không đồng nhất, thiếu nội dung bắt buộc, và các lỗi copy-paste thường xuyên xảy ra.',
    stat: '60',
    statUnit: '%',
    statLabel: 'hồ sơ có lỗi',
  },
  {
    icon: AlertTriangle,
    title: 'Rủi ro tuân thủ',
    description: 'Hồ sơ không đầy đủ có thể dẫn đến vấn đề khi thanh kiểm tra hoặc không được chấp nhận.',
    stat: '30',
    statUnit: '%',
    statLabel: 'bị yêu cầu bổ sung',
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.03),transparent_50%)]" />

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-red-500 font-medium mb-4 tracking-wide uppercase text-sm">
            Vấn đề
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Cách làm truyền thống
            <br />
            <span className="text-slate-400">không còn hiệu quả</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="group relative bg-white p-10 hover:bg-slate-50/80 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Watermark Icon */}
              <div className="absolute top-6 right-6 opacity-[0.04] pointer-events-none">
                <problem.icon className="h-32 w-32 text-red-500" />
              </div>

              {/* Stat - Main Visual */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl md:text-7xl font-bold text-red-500 tracking-tight">
                    {problem.stat}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-red-400">
                    {problem.statUnit}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mt-2 uppercase tracking-wider">
                  {problem.statLabel}
                </p>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {problem.description}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
