import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";
import { OperatorsRoutes } from "./routes/operators.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const operatorsRoutes = new OperatorsRoutes().getRoutes();

app.use("/operator", operatorsRoutes);

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

app.listen(3000, () => console.log("Server is running"));
