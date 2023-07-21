import { Router } from "express";
const router = Router();

import { getAllTrains, getTrainById } from "../controllers/trains.js";
router.get("/", getAllTrains);
router.get("/:id", getTrainById);

export default router;
