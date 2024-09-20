import express from "express";

const router = express.Router();
import {
  generateShortURL,
  redirectToURL,
  getAnalyticsOfURL,
  showHomePage
} from "../controllers/routehandlers.js";

router.get("/homepage", showHomePage);
router.post("/homepage", generateShortURL);

router.get("/:shortid", redirectToURL);

router.get("/analytics/:shortid", getAnalyticsOfURL);

export default router;
