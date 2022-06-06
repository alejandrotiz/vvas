import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export async function getAllBoats() {
    return await prisma.boats.findMany()
}

export async function availableBoat(booking) {
    const availBoat = await prisma.boats.findFirst({
        where: {
            idBoat: booking
        },
        select: {
            available: true
        }
    })
    return availBoat
}
