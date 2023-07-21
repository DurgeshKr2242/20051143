import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";

// Middleware
import { protect } from "./middleware/index.js";
// Routes
import trainRouter from "./routes/trains.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.json({ message: "Testing the server" });
});
app.use("/api/train", protect, trainRouter);

export default app;
