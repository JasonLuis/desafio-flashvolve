import { Request, Response, NextFunction } from "express";
import { CustomerService } from "../services/CustomerService";

export class CustomerController {
    private customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService();
    }

    async getClients(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this.customerService.getAll();

            return response.json(result);
        } catch (error) {
            next(error);
        }
    }
}