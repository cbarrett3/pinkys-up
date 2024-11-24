import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServiceBars } from "@/components/service-bars"
import { GallerySection } from "@/components/gallery-section"
import { Testimonials } from "@/components/testimonials"
import { QuoteForm } from "@/components/quote-form"
import { FounderSection } from "@/components/founder-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      {/* <ServiceShowcase /> */}
      <ServiceBars />
      <FounderSection />
      <div className="bg-secondary/30">
        <GallerySection />
      </div>
      {/* <div className="bg-background">
        <Partnerships />
      </div> */}
      <div className="bg-gray-900 text-white">
        <Testimonials />
      </div>
      <div className="bg-primary/10">
        <div className="container py-24">
          <div className="max-w-xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </div>
    </main>
  )
}
