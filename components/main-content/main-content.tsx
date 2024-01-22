import { ArticleCard } from "./article-card"
import { ContentCard } from "./sidebar/content-card"

export const MainContent = async () => {
    return (
        <div className="w-full container">
            <div className="grid grid-cols-12 ">
                <div className="grid col-span-3 shadow-lg bg-white p-4 rounded-md">
                    <div>
                        {
                            Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="w-full relative mb-4">
                                    <ContentCard />

                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="grid col-span-6 px-4">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2" >
                        {
                            Array.from({ length: 10 }).map((_, i) => (
                                <div key={i} className="w-full  mb-4">
                                    <ArticleCard />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="grid col-span-3 shadow-lg bg-white p-4 rounded-md">
                    <div className="grid col-span-3 shadow-lg bg-white p-4 rounded-md">
                        <div>
                            {
                                Array.from({ length: 5 }, (_, i) => (
                                    <div key={i} className="w-full relative mb-4">
                                        <ContentCard />

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}