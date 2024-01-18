import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { TimerIcon } from "@radix-ui/react-icons";

export const ArticleCard = (): JSX.Element => {
    return (
        <Card>
            <CardContent className="relative">
                <Image
                    src="https://preview.mysterythemes.com/articlewave/wp-content/uploads/sites/9/2023/07/mario2.jpg"
                    width={300}
                    height={225}
                    alt="preview image"
                    className="rounded-lg my-2"
                />
                <button className="text-xs py-1 rounded px-4 bg-gray-950 text-white absolute top-2 left-8 ">
                    Creative
                </button>
                <div>
                    <h5 className="text-sm text-gray-500 flex font-bold items-center">
                        <TimerIcon />16 July 2000
                    </h5>

                    <h5 className="text-xl font-bold my-2">
                        This is pure title and this is amaizing
                    </h5>
                    <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        voluptatum, quos, accusantium, nesciunt quas voluptates
                        exercitationem dolorum quia quibusdam quod quae. Quisquam
                        voluptatum, quos, accusantium, nesciunt quas voluptates
                        exercitationem dolorum quia quibusdam quod quae.
                    </p>
                    <div className="flex justify-between mt-4">
                        <button className="text-xs py-1 rounded px-4 bg-gray-950 text-white ">
                            Read More
                        </button>
                        <div>
                            <h5>2 mins read</h5>
                        </div>
                    </div>
                </div>
            </CardContent>


        </Card>
    );
}