import { cn } from "@/lib/utils"
import { MoonIcon, SunIcon, TextAlignJustifyIcon } from "@radix-ui/react-icons"
import { ProfileSettings } from "./profile-settings"
import { useTheme } from "next-themes";

export const DashboardHeader = ({ setSidebarOpen, sidebarOpen }: { setSidebarOpen: Function, sidebarOpen: boolean }) => {
    const { setTheme, theme } = useTheme();
    return (
        <div className=" w-full  ">
            <div className="flex justify-between items-center bg-white dark:bg-gray-800  px-4 py-2  border-gray-200 ">
                <div className={
                    cn(
                        "flex gap-0 ",
                        { "w-[60px]": !sidebarOpen }
                    )
                }>
                    <h1 className={cn(
                        "text-xl font-semibold text-gray-800 dark:text-white w-[180px] duration-300 ",
                        { "hidden": !sidebarOpen },
                    )}>Article </h1>
                    <div className="flex items-center">
                        <div className="text-sm font-semibold flex gap-4 items-center">
                            <TextAlignJustifyIcon onClick={() => setSidebarOpen((data: any) => !data)} /> Dashboard
                        </div>
                    </div>
                </div>


                <div className="flex items-center">
                    <div className="mx-4" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {
                            theme === "light" ? <MoonIcon /> : <SunIcon />
                        }
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">
                            <ProfileSettings />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}