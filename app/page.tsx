import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}
