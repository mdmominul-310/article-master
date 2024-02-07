"use server";
import AuthSchema from "@/schemas/auth-schemas";
import { z } from "zod";
import crypto from "crypto";
import db from "@/lib/db";
import ResponseReturn from "@/lib/response-retrun";



export const register = async (values: z.infer<typeof AuthSchema.registerSchmea>) => {
    try {
        const validatedValues = AuthSchema.registerSchmea.safeParse(values);
        if (!validatedValues.success) {
            return ResponseReturn.error("Validation Error")
        }
        const hashedpassword = crypto.createHash("sha256").update(validatedValues.data.password).digest("hex");
        const isExistUser = await db?.user.findUnique({
            where: {
                email: values.email
            }
        })
        if (isExistUser) {
            return ResponseReturn.error("User already exist");
        }
        const result = await db?.user.create({
            data: {
                email: validatedValues.data.email,
                password: hashedpassword,
                name: validatedValues.data.name,
            }
        })

        return ResponseReturn.success(result, "User created successfully");
    } catch (e) {
        const error = ResponseReturn.error("Something went wrong");
        return error;
    }
}

export const login = async (values: z.infer<typeof AuthSchema.loginSchema>) => {
    try {

    } catch (e) {
        console.log(e);
    }
}

