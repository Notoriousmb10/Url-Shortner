import express from "express";

const router = express.Router();
import { generateShortURL } from "../controllers/routehandlers.js";

router.post("/", generateShortURL);

export default router;
