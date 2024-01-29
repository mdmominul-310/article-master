import { TextEditor } from "@/components/text-editor/text-editor"
import { Input } from "@/components/ui/input"

const AddBlogs = () => {
    return (
        <div className="container my-4">
            <div className="bg-white shadow-md p-4">
                <Input placeholder="Enter blog title" className="my-2" />
                <Input placeholder="Enter blog title" className="my-2" />
                <Input placeholder="Enter blog title" className="my-2" />
                <Input placeholder="Enter blog title" className="my-2" />


                <TextEditor />
            </div>

        </div>
    )
}

export default AddBlogs