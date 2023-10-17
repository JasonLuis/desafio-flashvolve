import { Router, Request, Response, NextFunction } from "express";
import { OperatorsController } from "../controllers/OperatorController";

export class OperatorsRoutes {
  private router: Router;
  private operatorsController: OperatorsController;
  constructor() {
    this.router = Router();
    this.operatorsController = new OperatorsController();
  }

  getRoutes() {
    this.router.post(
      "/",
      this.operatorsController.auth.bind(this.operatorsController)
    );

    this.router.post(
      "/create",
      this.operatorsController.create.bind(this.operatorsController)
    );

    this.router.post(
      "/auth",
      this.operatorsController.auth.bind(this.operatorsController)
    );
    return this.router;
  }
}
