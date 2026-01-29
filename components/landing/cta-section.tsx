'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Clock, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const highlights = [
  { icon: Clock, text: 'Tiết kiệm 80% thời gian' },
  { icon: Shield, text: '100% tuân thủ TT13/2020' },
  { icon: FileText, text: 'Export DOCX chuyên nghiệp' },
]

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-950 to-slate-950" />

      {/* Animated Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/20 rounded-full blur-[200px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="h-4 w-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Bắt đầu ngay hôm nay</span>
          </motion.div>

          {/* Headline */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Sẵn sàng tạo hồ sơ{' '}
            <span className="bg-gradient-to-r from-primary-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              TT13/2020
            </span>
            <br />
            chuyên nghiệp?
          </h2>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Đừng để việc làm hồ sơ tốn hàng tuần. Với TT13 DocGen, bạn có thể hoàn thành chỉ trong vài phút.
          </p>

          {/* Highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              >
                <item.icon className="h-4 w-4 text-primary-400" />
                <span className="text-sm text-slate-300">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-base bg-gradient-to-r from-primary-500 to-emerald-500 hover:from-primary-600 hover:to-emerald-600 text-white shadow-2xl shadow-primary-500/30 border-0"
            >
              <Link href="/login">
                <Sparkles className="mr-2 h-5 w-5" />
                Bắt đầu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 hover:border-white/30"
            >
              <Link href="/docs">
                Xem hướng dẫn
              </Link>
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
