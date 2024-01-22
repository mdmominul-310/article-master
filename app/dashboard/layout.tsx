'use client'
import { useRouter, usePathname } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard-components/dashboard-header/dashboard-header"
import { Separator } from "@/components/ui/separator"
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
        }
    ]


    console.log()

    return (
        <div>
            <div className="flex" >
                <div className={
                    cn(
                        "w-[240px] bg-white dark:bg-gray-800 block",
                        { "hidden": !sidebarOpen },
                    )
                }

                >
                    <div className="w-[240px]">
                        <div className="py-3 text-center dark:bg-gray-950  w-[240px]">
                            <h2 className="">Article Master</h2>
                        </div>
                    </div>

                </div>

                <DashboardHeader
                    setSidebarOpen={setSidebarOpen}
                />
            </div>


            <div className="flex w-full relative gap-4 ">
                <div className={
                    cn(
                        "w-[240px] max-w-[240px] bg-white dark:bg-gray-800  h-screen relative top-0 left-0 z-10 transition-all duration-300 ease-in-out",
                        { "w-[60px]": !sidebarOpen },
                    )

                }>
                    <Separator />
                    <div className="">
                        <ul className="flex flex-col ">
                            {
                                navData?.map((nav, idx) => (
                                    <li key={idx} className={cn(
                                        "p-4 hover:bg-gray-100 dark:hover:bg-slate-900 cursor-pointer flex items-center gap-4 text-sm",
                                        { "bg-gray-100": nav.path === location },
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
                </div>
                <div className="w-full">
                    {children}
                </div>

            </div>

        </div>
    )
}

export default DashboardLayout