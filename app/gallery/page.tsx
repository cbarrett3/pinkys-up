import { SiteHeader } from "@/components/site-header"
import GalleryGrid from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <SiteHeader />
      <div className="pt-20">
        <div className="container py-12">
          <GalleryGrid />
        </div>
      </div>
    </main>
  )
}
