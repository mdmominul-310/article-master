"use server";
import AuthSchema from "@/schemas/auth-schemas";
import { z } from "zod";
import crypto from "crypto";
import db from "@/lib/db";


// class authActions {
//     constructor() {
//     }

//     async register(values: z.infer<typeof AuthSchema.registerSchmea>) {
//         try {
//             const validatedValues = AuthSchema.registerSchmea.safeParse(values);
//             if (!validatedValues.success) {
//                 return validatedValues.error;
//             }
//             const hashedpassword = crypto.createHash("sha256").update(validatedValues.data.password).digest("hex");
//             console.log(hashedpassword, "hashedpassword");
//             await db?.user.create({
//                 data: {
//                     email: validatedValues.data.email,
//                     password: hashedpassword,
//                     name: validatedValues.data.name,
//                     // username: validatedValues.data.username,
//                 }
//             })
//             return { message: "success" };
//         } catch (e) {
//             console.log(e);
//             return { message: "error" }
//         }
//     }
// }

// const AuthActions = new authActions();

export const register = async (values: z.infer<typeof AuthSchema.registerSchmea>) => {
    try {
        const validatedValues = AuthSchema.registerSchmea.safeParse(values);
        if (!validatedValues.success) {
            return { error: validatedValues.error }
        }
        const hashedpassword = crypto.createHash("sha256").update(validatedValues.data.password).digest("hex");
        console.log(hashedpassword, "hashedpassword");
        await db?.user.create({
            data: {
                email: validatedValues.data.email,
                password: hashedpassword,
                name: validatedValues.data.name,
                // username: validatedValues.data.username,
            }
        })
        return { message: "success" };
    } catch (e) {
        console.log(e);
        return { message: "error" }
    }
}
// export default AuthActions;