import { z } from "zod";


class authSchema {
    constructor() {

    }
    registerSchmea = z.object({
        email: z.string().email(),
        password: z.string().min(8),
        name: z.string().min(2),
        username: z.string().min(2).optional()
    })
    loginSchema = z.object({
        email: z.string().email(),
        password: z.string().min(1)
    })
}

const AuthSchema = new authSchema();

export default AuthSchema;