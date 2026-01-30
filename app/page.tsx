import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/landing/hero'
import { ProductsSection } from '@/components/landing/products-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { DemoSection } from '@/components/landing/demo-section'
import { PowerBISection } from '@/components/landing/powerbi-section'
import { FAQSection } from '@/components/landing/faq-section'
import { CTASection } from '@/components/landing/cta-section'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductsSection />
        <FeaturesSection />
        <DemoSection />
        <PowerBISection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
