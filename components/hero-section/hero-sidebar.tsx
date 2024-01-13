import Image from "next/image";
import { Card, CardContent } from "../ui/card"

import React, { JSX } from 'react';

export const HeroSidebar = (): JSX.Element => {
    return (
        <Card className="w-full ">
            <CardContent className="w-full">
                <Image src='https://preview.mysterythemes.com/articlewave/wp-content/uploads/sites/9/2023/07/mario2.jpg' width={300} height={225} alt="preview image" className="" />

            </CardContent>
        </Card>
    )
}

