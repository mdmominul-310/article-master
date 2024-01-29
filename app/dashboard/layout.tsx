'use client'
import { useRouter, usePathname } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-components/dashboard-header/dashboard-header"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { DashboardIcon, PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons"


type INavData = {
    title: String,
    path: String,
    icon: any
}

const DashboardLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const location: string = usePathname();
    const router = useRouter();
    const navData: INavData[] = [
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: DashboardIcon
        },
        {
            title: "User",
            path: "/dashboard/user",
            icon: PersonIcon
        },
        {
            title: "Blog",
            path: "/dashboard/blogs",
            icon: PaperPlaneIcon
        },

    ]




    return (
        <div>
            <div className="bg-green-900 sticky top-0">
                <DashboardHeader
                    setSidebarOpen={setSidebarOpen}
                    sidebarOpen={sidebarOpen}
                />
            </div>
            <div className="relative">
                <div className="flex h-screen w-screen fixed ">
                    <div className={
                        cn(
                            " bg-white dark:bg-slate-800 overflow-auto flex  overflow-x-hidden min-w-[240px] duration-300",
                            { "w-[80px] min-w-[80px]": !sidebarOpen }
                        )
                    }>

                        <ul className="flex flex-col w-full ">
                            {
                                navData?.map((nav, idx) => (
                                    <li key={idx} className={cn(
                                        "p-4 hover:bg-gray-300 dark:hover:bg-slate-900 cursor-pointer flex items-center gap-4 text-sm font-semibold",
                                        { "bg-gray-300": nav.path === location },
                                        { "dark:bg-slate-900": nav.path === location }
                                    )}
                                        onClick={() => router.push(nav?.path as string)}
                                    >
                                        <span><nav.icon /></span> <span className={cn(
                                            "block",
                                            { "hidden": !sidebarOpen }
                                        )}>{nav.title}</span>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className="w-full overflow-auto dark:bg-slate-700">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout