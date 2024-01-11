import { NavigationBar } from '@/components/navigationbar/navigation-bar'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Home() {
  const { setTheme } = useTheme()
  return (
  <main>
    <NavigationBar/>
    <Button onClick={()=>setTheme("dark")}>Button</Button>
  </main>
  )
}
