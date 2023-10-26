import { prisma } from "../database/prisma";

export class CUstomerRepository {
    
    async create(name: string, idTelegram: string) {
        const result = await prisma.customers.create({
            data: {
                name,
                idTelegram
            }
        });
        
        return result;
    }

    async findCustomer(idTelegram: string) {
        const result = await prisma.customers.findUnique({
            where: {
                idTelegram
            }
        });

        return result;
    }

    async getAll() {
        const result = await prisma.customers.findMany();

        return result;
    }
}