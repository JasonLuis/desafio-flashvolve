import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";
import { OperatorsRoutes } from "./routes/operators.routes";
import http from "http";
import { Server } from "socket.io";
import { ChatRoutes } from "./routes/chat.routes";
import { CustomersRoutes } from "./routes/customers.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const operatorsRoutes = new OperatorsRoutes().getRoutes();

const chatRoutes = new ChatRoutes().getRoutes();

const customerRoutes = new CustomersRoutes().getRoutes();

app.use("/operator", operatorsRoutes);
app.use("/chat", chatRoutes)
app.use("/customer", customerRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
);

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

export { serverHttp, io }
