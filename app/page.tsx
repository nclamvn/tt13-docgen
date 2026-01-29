import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/landing/hero'
import { ProblemSection } from '@/components/landing/problem-section'
import { SolutionSection } from '@/components/landing/solution-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { DemoSection } from '@/components/landing/demo-section'
import { FAQSection } from '@/components/landing/faq-section'
import { CTASection } from '@/components/landing/cta-section'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <DemoSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
