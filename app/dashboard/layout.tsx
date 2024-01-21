'use client'
import { DashboardHeader } from "@/components/dashboard-components/dashboard-header/dashboard-header"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { useState } from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
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
                        <div className="py-3 text-center bg-gray-950  w-[240px]">
                            <h2 className="">Article Master</h2>
                        </div>
                    </div>

                </div>

                <DashboardHeader
                    setSidebarOpen={setSidebarOpen}
                />
            </div>


            <div className="flex w-full relative ">
                <div className={
                    cn(
                        "w-[240px] max-w-[240px] bg-white dark:bg-gray-800  h-screen relative top-0 left-0 z-10 transition-all duration-300 ease-in-out",
                        { "w-[100px]": !sidebarOpen },
                    )

                }>
                    <Separator />
                    <div className="">
                        <ul className="flex flex-col ">
                            <li className="p-4 hover:bg-gray-100 dark:hover:bg-slate-900 cursor-pointer">
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li className="p-4 hover:bg-gray-100 dark:hover:bg-slate-900 cursor-pointer">
                                <a href="/dashboard/articles">Articles</a>
                            </li>
                            <li className="p-4 hover:bg-gray-100 dark:hover:bg-slate-900 cursor-pointer">
                                <a href="/dashboard/categories">Categories</a>
                            </li>
                            <li className="p-4 hover:bg-gray-100 dark:hover:bg-slate-900 cursor-pointer">
                                <a href="/dashboard/tags">Tags</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="">
                    {children}
                </div>

            </div>

        </div>
    )
}

export default DashboardLayout