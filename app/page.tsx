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
        <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Ready to Elevate Your Event?
            </h1>
            <p className="text-xl text-gray-800 font-medium">
              Let&apos;s create an unforgettable experience together.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </div>
    </main>
  )
}
