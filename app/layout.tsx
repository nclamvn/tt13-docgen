import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { QueryProvider } from '@/components/providers/query-provider'

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-plus-jakarta',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'TT13 DocGen - Tạo hồ sơ TT13/2020 tự động với AI',
  description: 'Biến tài liệu thô thành hồ sơ chứng minh quy trình sản xuất phần mềm theo TT13/2020 chuyên nghiệp trong vài phút với AI Copilot.',
  keywords: ['TT13', 'TT13/2020', 'hồ sơ phần mềm', 'thông tư 13', 'compliance', 'AI'],
  authors: [{ name: 'TC Data' }],
  openGraph: {
    title: 'TT13 DocGen - Tạo hồ sơ TT13/2020 tự động với AI',
    description: 'Giảm 80% thời gian tạo hồ sơ TT13/2020 với AI Copilot thông minh',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  )
}
