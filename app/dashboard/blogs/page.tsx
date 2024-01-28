
import { DataTable } from "@/components/data-table/data-table"
import { Payment, columns } from "./column"
import Link from "next/link"


async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ]
}

export default async function Blogs() {
    const data = await getData()
    // const router = useRouter();

    return (
        <div className="container mx-auto py-10 w-full">
            <div>
                {/* <Button onClick={() => router.push("/addblogs")}>Add blogs</Button> */}
                <Link href="/dashboard/blogs/addblogs">
                    Add Blogs
                </Link>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}
