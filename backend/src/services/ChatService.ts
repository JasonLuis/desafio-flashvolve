import { Chat } from "../interfaces/ChatInterface";
import { ChatRepository } from "../repositories/ChatRepository";

export class ChatService {

    private chatRepository: ChatRepository;

    constructor() {
        this.chatRepository = new ChatRepository();
    }

    async create({ operatorId, idTelegram, text, sent }: Chat.Create) {
        const res = await this.chatRepository.create({
            idTelegram,
            operatorId,
            text,
            sent
        });

        return res;
    }
}
