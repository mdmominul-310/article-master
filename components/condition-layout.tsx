"use client"

import { usePathname } from "next/navigation"
import { NavigationBar } from "./navigationbar/navigation-bar"
import { Footer } from "./footer/Footer"

export const ConditionLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    if (!(pathname.startsWith('/dashhboard'))) {
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
