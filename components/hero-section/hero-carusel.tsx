
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import './hero-carusel.css'
import { PersonIcon, TimerIcon } from "@radix-ui/react-icons"

export function HeroCarusel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="py-4">
            <Carousel setApi={setApi} className="w-full ">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <article
                                className="relative"
                            >
                                <div>
                                    <Image
                                        src="https://preview.mysterythemes.com/articlewave/wp-content/uploads/sites/9/2023/07/image1.jpg"
                                        alt="hero-carusel-1"
                                        width={650}
                                        height={420}
                                        layout="responsive"
                                        className="object-cover object-center rounded-lg"
                                    />
                                </div>
                                <div className="bottom-0 absolute p-6 carusel-bottom-gradiant inline-block w-full" >
                                    <p className="bg-red-500 font-bold text-white inline-block px-4 rounded">Categories</p>
                                    <h3 className="text-3xl font-bold text-white py-2 ">This is categories</h3>
                                    <div className="flex gap-4 text-white py-3">
                                        <h5 className="flex justify-center items-center"><TimerIcon />16 July 2000</h5>
                                        <h5 className="flex justify-center items-center"><PersonIcon /> Admin</h5>
                                    </div>
                                    <div className="flex justify-between py-4 text-white">
                                        <p className="">Read More</p>
                                        <h6>2 mins Read</h6>
                                    </div>
                                </div>
                                {/* <h1 className="bg-red-500">This is categories</h1> */}
                            </article>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    )
}
