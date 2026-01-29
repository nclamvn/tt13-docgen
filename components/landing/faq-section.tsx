'use client'

import { motion } from 'framer-motion'
import { HelpCircle, MessageCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const faqs = [
  {
    question: 'TT13/2020 là gì?',
    answer:
      'Thông tư 13/2020/TT-BTTTT quy định về việc lập hồ sơ chứng minh quy trình sản xuất phần mềm của doanh nghiệp. Hồ sơ này bao gồm 7 công đoạn: Xác định yêu cầu, Phân tích thiết kế, Lập trình, Kiểm thử, Đóng gói, Cài đặt bàn giao, và Phát hành.',
  },
  {
    question: 'AI có thể tạo nội dung chính xác không?',
    answer:
      'AI được train với kiến thức về TT13/2020 và các mẫu hồ sơ thực tế. Tuy nhiên, bạn vẫn cần review và điều chỉnh nội dung cho phù hợp với dự án cụ thể. AI Copilot sẽ hỗ trợ bạn trong quá trình này.',
  },
  {
    question: 'File output có định dạng gì?',
    answer:
      'Hiện tại chúng tôi hỗ trợ export file DOCX (Microsoft Word). File đã được format sẵn với header, footer, page numbers, và sẵn sàng để in ấn. PDF sẽ được hỗ trợ trong phiên bản tiếp theo.',
  },
  {
    question: 'Dữ liệu của tôi có an toàn không?',
    answer:
      'Có, chúng tôi cam kết bảo mật dữ liệu của bạn. Tất cả files được mã hóa khi truyền và lưu trữ. Chúng tôi không chia sẻ dữ liệu với bên thứ ba và bạn có thể xóa dữ liệu bất cứ lúc nào.',
  },
  {
    question: 'Có thể tùy chỉnh template không?',
    answer:
      'Có, bạn có thể tùy chỉnh logo, màu sắc thương hiệu, và lưu templates riêng. Bạn cũng có thể điều chỉnh nội dung của từng công đoạn trước khi export.',
  },
  {
    question: 'Làm sao để liên hệ hỗ trợ?',
    answer:
      'Bạn có thể gửi email đến support@tcdata.vn hoặc sử dụng chat support trong app.',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Header */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Câu hỏi{' '}
              <span className="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
                thường gặp
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Giải đáp các thắc mắc phổ biến về TT13 DocGen và quy định TT13/2020.
            </p>

            {/* Contact CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-emerald-50 border border-primary-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-500 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Cần hỗ trợ thêm?</h4>
                  <p className="text-sm text-slate-600">Đội ngũ của chúng tôi sẵn sàng giúp đỡ</p>
                </div>
              </div>
              <Button asChild className="w-full bg-gradient-to-r from-primary-500 to-emerald-500 text-white">
                <Link href="mailto:support@tcdata.vn">
                  Liên hệ hỗ trợ
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - FAQ List */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group bg-white rounded-2xl border border-slate-100 px-6 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-300 data-[state=open]:border-primary-300 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5 [&[data-state=open]>svg]:text-primary-500">
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
