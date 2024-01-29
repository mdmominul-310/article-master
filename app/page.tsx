
import HeroSection from '@/components/hero-section/HeroSection'
import { MainContent } from '@/components/main-content/main-content'
import { Toaster } from 'react-hot-toast'

export default async function Home() {
  return (
    <main className=''>
      <HeroSection />
      <MainContent />
    </main>
  )
}
