import express from "express";

const router = express.Router();
import {
  generateShortURL,
  redirectToURL,
  getAnalyticsOfURL,
} from "../controllers/routehandlers.js";

router.post("/", generateShortURL);

router.get("/:shortid", redirectToURL);

router.get("/analytics/:shortid", getAnalyticsOfURL);

export default router;
