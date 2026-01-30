'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, FileText, LayoutDashboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const products = [
  {
    icon: FileText,
    name: 'TT13 DocGen',
    description: 'Tạo hồ sơ TT13/2020',
    href: '/login',
    gradient: 'from-primary-500 to-emerald-500',
    shadow: 'shadow-primary-500/30',
  },
  {
    icon: LayoutDashboard,
    name: 'Power BI Studio',
    description: 'Thiết kế layout Power BI',
    href: '/powerbi',
    gradient: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-500/30',
  },
]

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-950 to-slate-950" />

      {/* Animated Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/20 rounded-full blur-[200px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
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
            Sẵn sàng{' '}
            <span className="bg-gradient-to-r from-primary-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
              tự động hóa
            </span>
            <br />
            quy trình của bạn?
          </h2>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Chọn công cụ phù hợp và bắt đầu ngay. Tiết kiệm 80% thời gian với AI.
          </p>

          {/* Product CTAs */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={product.href}
                  className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 mx-auto`}>
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{product.description}</p>
                  <Button
                    className={`w-full bg-gradient-to-r ${product.gradient} text-white border-0 shadow-lg ${product.shadow}`}
                  >
                    Bắt đầu
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom text */}
          <motion.p
            className="mt-8 text-sm text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Không cần thẻ tín dụng. Dùng thử miễn phí.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
