import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllCredits() {
    return await prisma.credits.findMany()
}

export async function UpdateCredit(creditId, credit, boatPrice) {
    
    // restar el monto de la transaccion
    const newCredit = credit - boatPrice;
    return await prisma.credits.update({
        where: {
            idCredit: creditId,
        },
        data: {
            Credit: newCredit
        }
        
    })

}




    
 

