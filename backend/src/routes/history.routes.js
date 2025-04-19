import express from "express";
import {
  addToHistory,
  getHistory,
  clearHistory,
  removeFromHistory,
} from "../controllers/history.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

// Apply JWT verification middleware to all routes
router.use(verifyJWT);

// Add video to history
router.post("/:videoId", addToHistory);

// Get user's watch history
router.get("/", getHistory);

// Clear watch history
router.delete("/clear", clearHistory);

// Remove specific video from history
router.delete("/:videoId", removeFromHistory);

export default router; 