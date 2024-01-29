
"use client"

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { z } from "zod"
import AuthSchema from "@/schemas/auth-schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"


export const LoginForm = () => {
    const form = useForm<z.infer<typeof AuthSchema.loginSchema>>({
        resolver: zodResolver(AuthSchema.loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
    const onSubmit = (values: z.infer<typeof AuthSchema.loginSchema>) => {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }: { field: any }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <input
                                    {...field}
                                    placeholder="Email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="password"
                    control={form.control}
                    render={({ field }: { field: any }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <input
                                    {...field}
                                    placeholder="Password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="py-4 my-4">Login</Button>
            </form>
        </Form>
    )
}