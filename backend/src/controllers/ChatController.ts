import { NextFunction, Request, Response } from "express";
import { ChatService } from "../services/ChatService";

export class ChatController {
    private chatService: ChatService;

    constructor() {
        this.chatService = new ChatService();
    }

    async getMessage(request: Request, response: Response, next: NextFunction) {
        const { telegramId } = request.body;
        const { operator_id } = request;
        try {
            const result = await this.chatService.getMessages(operator_id, telegramId);

            return response.json(result);
        } catch (error) {
            next(error);
        }
    }
}