import { Router } from "express";
import { CustomerController } from "../controllers/CustomerController";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

export class CustomersRoutes {
    private router: Router;
    private customersController: CustomerController;
    private authMiddleware: AuthMiddleware;

    constructor() {
        this.router = Router();
        this.customersController = new CustomerController();
        this.authMiddleware = new AuthMiddleware();
    }

    getRoutes() {
        this.router.post(
            "/getAll",
            this.authMiddleware.auth.bind(this.authMiddleware),
            this.customersController.getClients.bind(this.customersController)
        );

        return this.router;
    }
}