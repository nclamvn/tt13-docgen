'use client'

import { motion } from 'framer-motion'
import { FileText, LayoutDashboard, ArrowRight, Sparkles, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const products = [
  {
    id: 'tt13',
    icon: FileText,
    name: 'TT13 DocGen',
    tagline: 'Hồ sơ TT13/2020 trong vài phút',
    description: 'Biến tài liệu thô thành hồ sơ chứng minh quy trình sản xuất phần mềm theo Thông tư 13/2020/TT-BTTTT chuyên nghiệp với AI Copilot.',
    features: [
      'AI Copilot thông minh',
      'Export DOCX chuẩn',
      'Tự động chèn ảnh minh họa',
      '7 công đoạn đầy đủ',
    ],
    color: 'primary',
    gradient: 'from-primary-500 to-emerald-500',
    bgGradient: 'from-primary-500/10 to-emerald-500/10',
    href: '/login',
    cta: 'Tạo hồ sơ TT13',
    badge: 'AI Powered',
  },
  {
    id: 'powerbi',
    icon: LayoutDashboard,
    name: 'Power BI Studio',
    tagline: 'Thiết kế layout Power BI trực quan',
    description: 'Drag & drop layout designer cho Power BI với 12+ templates ngành nghề. Xuất JSON tương thích Power BI Desktop.',
    features: [
      '12+ industry templates',
      'Drag & drop designer',
      'Multi-select & alignment',
      'Export JSON/PBIX ready',
    ],
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
    href: '/powerbi',
    cta: 'Mở Power BI Studio',
    badge: 'New',
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
            <BarChart3 className="h-4 w-4" />
            Sản phẩm
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-primary-500 to-emerald-500 bg-clip-text text-transparent">
              TC Data Tools
            </span>
            <br />
            Bộ công cụ AI cao cấp
          </h2>
          <p className="text-lg text-slate-600">
            Tự động hóa quy trình, tiết kiệm thời gian, nâng cao chất lượng
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`relative h-full bg-gradient-to-br ${product.bgGradient} rounded-3xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-500`}>
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${product.gradient} text-white`}>
                    <Sparkles className="h-3 w-3" />
                    {product.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <product.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                  {product.name}
                </h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}>
                  {product.tagline}
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full h-12 bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white border-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <Link href={product.href}>
                    {product.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
