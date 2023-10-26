import { Chat } from "../interfaces/ChatInterface";
import { ChatRepository } from "../repositories/ChatRepository";

export class ChatService {

    private chatRepository: ChatRepository;

    constructor() {
        this.chatRepository = new ChatRepository();
    }

    async create({ operatorId=undefined, idTelegram, text, sent }: Chat.Create) {
        const res = await this.chatRepository.create({
            idTelegram,
            operatorId,
            text,
            sent
        });

        return res;
    }

    async getMessages(operatorId: string, idTelegram: string) {
        const res = await this.chatRepository.getMessages(operatorId, idTelegram);
        return res;
    }
}
