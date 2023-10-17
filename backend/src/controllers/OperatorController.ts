import { NextFunction, Request, Response } from "express";
import { OperatorsService } from "../services/OperatorsService";

export class OperatorsController {
  private operatorsService: OperatorsService;

  constructor() {
    this.operatorsService = new OperatorsService();
  }

  async create(request: Request, response: Response, next: NextFunction) {
    const { name, login, password } = request.body;
    try {
      const result = await this.operatorsService.create({
        name,
        login,
        password,
      });

      return response.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  async auth(request: Request, response: Response, next: NextFunction) {
    const { login, password } = request.body;
    try {
      const result = await this.operatorsService.auth(login, password);
      return response.json(result);
    } catch (error) {
      next(error);
    }
  } 
}
