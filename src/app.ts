import cors from "cors";
import express, { type Request, type Response } from "express";
import notFound from "./app/middlewares/notFound.js";
import userRoutes from "./app/modules/user/user.route.js";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler.js";
import { AuthRoutes } from "./app/modules/auth/auth.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/users", AuthRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "welcome to my jersey backend app",
  });
});

app.use(notFound);
app.use(globalErrorHandler);
export default app;
