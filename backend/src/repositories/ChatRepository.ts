import { prisma } from "../database/prisma";
import { Chat } from "../interfaces/ChatInterface";

export class ChatRepository {
    async create({operatorId, idTelegram, text, sent}: Chat.Create) {

        if(operatorId) {
            const result = await prisma.messages.create({
                data: {
                    idTelegram: idTelegram,
                    operators_id: operatorId,
                    text: text,
                    dtMessage: new Date(),
                    sent: sent
                }
            });
    
            return result;
        }
        
        const result = await prisma.messages.create({
            data: {
                idTelegram: idTelegram,
                text: text,
                dtMessage: new Date(),
                sent: sent
            }
        });

        return result;
    }   

    async getMessages(operatorId: string, idTelegram: string) {
        console.log("operatorId", operatorId);
        const result = await prisma.messages.findMany({
            where: {
                idTelegram,
                operators_id: operatorId
            }
        });

        /* const result = await prisma.messages.findMany({
            
        }); */

        return result;
    }
}