import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import healthRoutes from "./routes/health.routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Welcome to DevFlow API 🚀",
  });
});

app.use("/health", healthRoutes);

export default app;