import { prisma } from "../database/prisma";
import { Chat } from "../interfaces/ChatInterface";

export class ChatRepository {
    async create({operatorId, idTelegram, text, sent}: Chat.Create) {
        const result = await prisma.messages.create({
            data: {
                operators_id: operatorId,
                idTelegram: idTelegram,
                text: text,
                dtMessage: new Date(),
                sent: sent
            }
        });

        return result;
    }

    async getAllMessages(idTelegram: string, operatorId: string) {
        const result = await prisma.messages.findMany({
            where: {
                idTelegram,
                operators_id: operatorId
            }
        });

        return result;
    }
}