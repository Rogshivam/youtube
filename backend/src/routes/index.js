import express from "express";
import userRouter from "./user.routes.js";
import videoRouter from "./video.routes.js";
import historyRouter from "./history.routes.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/videos", videoRouter);
router.use("/history", historyRouter);

export default router; 