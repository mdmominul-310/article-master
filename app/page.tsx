import { Footer } from '@/components/footer/Footer'
import { NavigationBar } from '@/components/navigationbar/navigation-bar'

import HeroSection from '@/components/hero-section/HeroSection'

export default function Home() {
  return (
    <main className=''>
      <NavigationBar />
      <HeroSection />
      <Footer />
      {/* <Button onClick={()=>setTheme("light")}>Button</Button> */}
    </main>
  )
}
