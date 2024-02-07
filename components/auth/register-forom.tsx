"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import AuthSchema from "@/schemas/auth-schemas"
import { useTransition } from "react"
import { register } from "@/actions/auth-actions"
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"




export function RegisterForm() {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof AuthSchema.registerSchmea>>({
        resolver: zodResolver(AuthSchema.registerSchmea),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    })
    const router = useRouter()

    function onSubmit(values: z.infer<typeof AuthSchema.registerSchmea>) {
        startTransition(() => {
            register(values).then((res) => {
                if (res.status === 200) {
                    toast.success(res.message)
                    router.push('/auth/login')
                }
                else {
                    toast.error(res.message)
                }
            })
        })


    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }: { field: any }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Display Name" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }: { field: any }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input placeholder="your email address" {...field} />
                            </FormControl>
                            <FormDescription>
                                your email address.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }: { field: any }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Your password" {...field} type="password" />
                            </FormControl>
                            <FormDescription>
                                your password.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" isLoading={isPending}>Submit</Button>
            </form>
            <Toaster />
        </Form>
    )
}
