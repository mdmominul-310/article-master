import { Footer } from '@/components/footer/Footer'
import { NavigationBar } from '@/components/navigationbar/navigation-bar'
import HeroSection from '@/components/hero-section/HeroSection'

export default async function Home() {
  return (
    <main className=''>
      <NavigationBar />
      <HeroSection />
      <Footer />
    </main>
  )
}
