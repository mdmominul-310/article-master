import { PrismaClient } from '@prisma/client'
declare global {
    var db: PrismaClient | undefined
}
let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.db) {
        global.db = new PrismaClient();
    }
    prisma = global.db;
}

export default db;
