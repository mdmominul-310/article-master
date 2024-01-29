import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import db from "@/lib/db"
export const { handlers: { GET, POST }, auth, signIn, signOut, unstable_update } = NextAuth({
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
    },
    providers: [],
    session: {
        strategy: "jwt",

    },
    adapter: PrismaAdapter(db as any),
})
