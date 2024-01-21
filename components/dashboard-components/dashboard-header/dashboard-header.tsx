import { TextAlignJustifyIcon } from "@radix-ui/react-icons"

export const DashboardHeader = ({ setSidebarOpen }: { setSidebarOpen: Function }) => {
    return (
        <div className=" block w-full sticky top-0">
            <div className="flex justify-between items-center bg-white dark:bg-gray-800  px-4 py-2  border-gray-200 ">
                <div className="flex items-center">
                    <div className="text-sm font-semibold flex gap-4 items-center">
                        <TextAlignJustifyIcon onClick={() => setSidebarOpen((data: any) => !data)} /> Dashboard
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="flex items-center">
                        <div className="mr-2">John Doe</div>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}