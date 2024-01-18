import Image from "next/image";
import { Card, CardContent } from "../ui/card"

import React, { JSX } from 'react';

export const HeroSidebar = (): JSX.Element => {
    return (
        <div className="ml-6 py-4">
            <div className="w-full relative mb-4">
                <Image src='https://preview.mysterythemes.com/articlewave/wp-content/uploads/sites/9/2023/07/mario2.jpg'
                    width={300} height={225} alt="preview image" className="object-cover object-center rounded-lg"
                    layout="responsive"
                />
                <div className="bottom-0 absolute p-6 carusel-bottom-gradiant inline-block w-full" >
                    <p className="bg-red-500 font-bold text-white inline-block px-4 rounded">Categories</p>
                    <h3 className="text-3xl font-bold text-white py-2 ">This is categories</h3>
                </div>

            </div>
            <div className="w-full relative">
                <Image src='https://preview.mysterythemes.com/articlewave/wp-content/uploads/sites/9/2023/07/mario2.jpg'
                    width={300} height={225} alt="preview image" className="object-cover object-center rounded-lg"
                    layout="responsive"
                />
                <div className="bottom-0 absolute p-6 carusel-bottom-gradiant inline-block w-full" >
                    <p className="bg-red-500 font-bold text-white inline-block px-4 rounded">Categories</p>
                    <h3 className="text-3xl font-bold text-white py-2 ">This is categories</h3>
                </div>

            </div>
        </div>
    )
}

