'use client'

import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Move,
  Layers,
  Download,
  Grid3X3,
  Palette,
  MousePointer2,
  FileJson,
  ArrowRight,
  Check,
  BarChart3,
  PieChart,
  LineChart,
  Table2,
  Gauge,
  Filter,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
  {
    icon: Move,
    title: 'Drag & Drop',
    description: 'Kéo thả trực quan, căn chỉnh thông minh với snap-to-grid',
  },
  {
    icon: Layers,
    title: 'Multi-Select',
    description: 'Chọn nhiều visual, căn chỉnh hàng loạt, group/ungroup',
  },
  {
    icon: Grid3X3,
    title: '12+ Templates',
    description: 'Sales, Finance, HR, Marketing, Healthcare, Manufacturing...',
  },
  {
    icon: Palette,
    title: 'Theme Editor',
    description: 'Tùy chỉnh màu sắc, font, spacing theo brand guideline',
  },
  {
    icon: MousePointer2,
    title: 'Smart Align',
    description: 'Toolbar căn chỉnh: left, center, right, distribute',
  },
  {
    icon: FileJson,
    title: 'Export JSON',
    description: 'Xuất layout JSON tương thích Power BI Desktop',
  },
]

const visualTypes = [
  { icon: BarChart3, name: 'Bar Chart', color: 'bg-blue-500' },
  { icon: LineChart, name: 'Line Chart', color: 'bg-emerald-500' },
  { icon: PieChart, name: 'Pie/Donut', color: 'bg-purple-500' },
  { icon: Table2, name: 'Data Table', color: 'bg-slate-500' },
  { icon: Gauge, name: 'KPI/Gauge', color: 'bg-amber-500' },
  { icon: Filter, name: 'Slicer', color: 'bg-pink-500' },
]

const templates = [
  'Sales Dashboard',
  'Finance Overview',
  'HR Analytics',
  'Marketing Metrics',
  'Executive Summary',
  'Operations',
  'Customer Service',
  'E-Commerce',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Project Management',
]

export function PowerBISection() {
  return (
    <section id="powerbi" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-6">
            <LayoutDashboard className="h-4 w-4" />
            Power BI Layout Studio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Thiết kế dashboard{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Power BI
            </span>
            <br />
            chưa bao giờ dễ hơn
          </h2>
          <p className="text-lg text-slate-400">
            Drag & drop visual, chọn template, export JSON - tất cả trong trình duyệt
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: App Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl" />

            {/* App Window */}
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
                    tcdata.vn/powerbi-studio
                  </div>
                </div>
              </div>

              {/* App Content */}
              <div className="p-4">
                {/* Toolbar */}
                <div className="flex items-center gap-2 mb-4 p-2 bg-slate-800/50 rounded-lg">
                  <div className="flex gap-1">
                    {['AlignLeft', 'AlignCenter', 'AlignRight'].map((_, i) => (
                      <div key={i} className="h-8 w-8 rounded bg-slate-700/50 flex items-center justify-center">
                        <div className="h-4 w-0.5 bg-slate-500" />
                      </div>
                    ))}
                  </div>
                  <div className="h-6 w-px bg-slate-700" />
                  <div className="flex gap-1">
                    {['Grid', 'Snap'].map((_, i) => (
                      <div key={i} className="h-8 w-8 rounded bg-slate-700/50" />
                    ))}
                  </div>
                  <div className="ml-auto">
                    <div className="px-3 py-1.5 rounded bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium">
                      Export
                    </div>
                  </div>
                </div>

                {/* Canvas with Visuals */}
                <div className="relative bg-slate-800/30 rounded-lg p-4 min-h-[300px] border border-slate-700/50">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] rounded-lg" />

                  {/* Mock Visuals */}
                  <div className="relative grid grid-cols-3 gap-3">
                    {/* KPI Cards */}
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="bg-slate-700/50 rounded-lg p-3 border border-amber-500/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                      >
                        <div className="text-[10px] text-slate-500 mb-1">KPI {i}</div>
                        <div className="text-lg font-bold text-white">${(Math.random() * 100).toFixed(0)}K</div>
                        <div className="text-[10px] text-emerald-400">+12%</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <motion.div
                      className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <div className="text-[10px] text-slate-500 mb-2">Revenue by Month</div>
                      <div className="flex items-end gap-1 h-16">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-amber-500 to-orange-400 rounded-t"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <div className="text-[10px] text-slate-500 mb-2">Sales by Region</div>
                      <div className="flex items-center justify-center h-16">
                        <div className="relative h-14 w-14">
                          <div className="absolute inset-0 rounded-full border-4 border-amber-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
                          <div className="absolute inset-2 rounded-full border-4 border-orange-400" />
                          <div className="absolute inset-4 rounded-full bg-slate-800" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/30 hover:bg-white/[0.05] transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-3 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-colors">
                    <feature.icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visual Types */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-center text-lg font-semibold text-white mb-6">
            Hỗ trợ đầy đủ các loại visual
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {visualTypes.map((visual, index) => (
              <motion.div
                key={visual.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className={`h-6 w-6 rounded ${visual.color} flex items-center justify-center`}>
                  <visual.icon className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-sm text-slate-300">{visual.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-center text-lg font-semibold text-white mb-6">
            12 Templates ngành nghề
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {templates.map((template, index) => (
              <motion.span
                key={template}
                className="px-3 py-1.5 rounded-lg bg-slate-800/50 text-sm text-slate-400 border border-slate-700/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
              >
                {template}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            size="lg"
            asChild
            className="h-14 px-8 text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-2xl shadow-amber-500/30 border-0"
          >
            <Link href="/powerbi">
              Mở Power BI Studio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
