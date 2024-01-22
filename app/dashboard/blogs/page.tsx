import { DataTable } from "@/components/data-table/data-table"
import { Payment, columns } from "./column"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
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

    return (
        <div className="container mx-auto py-10 w-full">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
