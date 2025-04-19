import { asyncHandler } from "../utils/asynHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { History } from "../models/history.model.js";
import { Video } from "../models/video.model.js";

// Add video to history
const addToHistory = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const userId = req.user._id;

  // Check if video exists
  const video = await Video.findById(videoId);
  if (!video) {
    throw new ApiError(404, "Video not found");
  }

  // Update or create history entry
  const history = await History.findOneAndUpdate(
    { user: userId, video: videoId },
    { $set: { watchedAt: new Date() } },
    { upsert: true, new: true }
  ).populate("video");

  return res
    .status(200)
    .json(new ApiResponse(200, history, "Video added to history"));
});

// Get user's watch history
const getHistory = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const history = await History.find({ user: userId })
    .populate("video")
    .sort({ watchedAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, history, "History retrieved successfully"));
});

// Clear watch history
const clearHistory = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  await History.deleteMany({ user: userId });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "History cleared successfully"));
});

// Remove specific video from history
const removeFromHistory = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const userId = req.user._id;

  await History.findOneAndDelete({ user: userId, video: videoId });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Video removed from history"));
});

export { addToHistory, getHistory, clearHistory, removeFromHistory }; 