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
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${product.id === 'tt13' ? 'bg-primary-50 text-primary-700' : 'bg-amber-50 text-amber-700'}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${product.id === 'tt13' ? 'bg-primary-500' : 'bg-amber-500'}`} />
                    {product.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`h-12 w-12 rounded-xl ${product.id === 'tt13' ? 'bg-primary-100' : 'bg-amber-100'} flex items-center justify-center mb-5`}>
                  <product.icon className={`h-6 w-6 ${product.id === 'tt13' ? 'text-primary-600' : 'text-amber-600'}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-1.5">
                  {product.name}
                </h3>
                <p className={`text-sm font-medium ${product.id === 'tt13' ? 'text-primary-600' : 'text-amber-600'} mb-3`}>
                  {product.tagline}
                </p>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <div className={`h-1 w-1 rounded-full ${product.id === 'tt13' ? 'bg-primary-400' : 'bg-amber-400'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  variant="outline"
                  className={`w-full h-11 font-medium ${product.id === 'tt13' ? 'border-primary-200 text-primary-700 hover:bg-primary-50 hover:border-primary-300' : 'border-amber-200 text-amber-700 hover:bg-amber-50 hover:border-amber-300'} transition-all duration-200`}
                >
                  <Link href={product.href}>
                    {product.cta}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
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
