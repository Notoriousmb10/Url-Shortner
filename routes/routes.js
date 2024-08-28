import express from "express";

const router = express.Router();
import { generateShortURL, redirectToURL } from "../controllers/routehandlers.js";

router.post("/", generateShortURL);

router.get("/:shortid", redirectToURL);

export default router;
