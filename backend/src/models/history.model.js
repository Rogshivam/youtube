import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    watchedAt: {
      type: Date,
      default: Date.now,
    },
    watchTime: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Compound index to ensure unique video entries per user
historySchema.index({ user: 1, video: 1 }, { unique: true });

export const History = mongoose.model("History", historySchema); 