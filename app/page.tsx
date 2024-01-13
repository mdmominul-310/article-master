import { ActivityLog } from '@/components/activity-log/ActivityLog'
import { Footer } from '@/components/footer/Footer'
import { NavigationBar } from '@/components/navigationbar/navigation-bar'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import {
  DrawerTrigger,
} from '@/components/ui/drawer'
import HeroSection from '@/components/hero-section/HeroSection'

export default function Home() {
  // const { setTheme } = useTheme()
  return (
    <main className=''>
      <NavigationBar />
      <HeroSection />
      <Footer />
      {/* <Button onClick={()=>setTheme("light")}>Button</Button> */}
    </main>
  )
}
