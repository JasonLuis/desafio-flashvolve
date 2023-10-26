import { Router } from "express";
import { ChatController } from "../controllers/ChatController";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

export class ChatRoutes {
    private router: Router;
    private chatController: ChatController;
    private authMiddleware: AuthMiddleware;

    constructor() {
        this.router = Router();
        this.chatController = new ChatController();
        this.authMiddleware = new AuthMiddleware();
    }

    getRoutes() {
        this.router.post(
            "/messages",
            this.authMiddleware.auth.bind(this.authMiddleware),
            this.chatController.getMessage.bind(this.chatController)
        );

        return this.router;
    }
}