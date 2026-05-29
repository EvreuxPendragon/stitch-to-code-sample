import { Hero } from '@/components/Hero'
import { FavoritesGrid } from '@/components/FavoritesGrid'
import { StorySection } from '@/components/StorySection'
import { TestimonialSection } from '@/components/TestimonialSection'
import { InfoBar } from '@/components/InfoBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export function HomePage() {
  return (
    <div className="min-h-screen bg-brand-neutral">
      <Navbar />
      <main>
        <Hero />
        <FavoritesGrid />
        <StorySection />
        <TestimonialSection />
        <InfoBar />
      </main>
      <Footer />
    </div>
  )
}
