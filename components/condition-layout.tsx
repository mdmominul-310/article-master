"use client"

import { usePathname } from "next/navigation"
import { NavigationBar } from "./navigationbar/navigation-bar"
import { Footer } from "./footer/Footer"

export const ConditionLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    console.log(pathname.startsWith('/dashboard'))
    if ((pathname.startsWith('/dashboard'))) {
        return (
            <div>
                {children}
            </div>
        )
    }
    return (
        <div>
            <NavigationBar />
            {children}
            <Footer />
        </div>
    )
}
