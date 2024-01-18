import { Footer } from '@/components/footer/Footer'
import { NavigationBar } from '@/components/navigationbar/navigation-bar'
import HeroSection from '@/components/hero-section/HeroSection'
import { MainContent } from '@/components/main-content/main-content'

export default async function Home() {
  return (
    <main className=''>
      <NavigationBar />
      <HeroSection />
      <MainContent />
      <Footer />

    </main>
  )
}
