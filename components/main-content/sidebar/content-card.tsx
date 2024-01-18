import { Button } from "@/components/ui/button"
import Image from "next/image"

export const ContentCard = (): JSX.Element => {
    return (
        <div className="w-full relative mb-4 flex gap-4">
            <Image src='https://preview.mysterythemes.com/articlewave/wp-content/uploads/sites/9/2023/07/mario2.jpg'
                width={80} height={60} alt="preview image" className="rounded-full"
            />
            <div >
                <button className="text-xs py-1 rounded px-4 bg-gray-950 text-white ">Creative</button>
                <h5>This is pure title and this is amaizing</h5>
            </div>


        </div>
    )
}