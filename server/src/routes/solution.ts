import express from "express";
export const router = express.Router();

import * as solutionController from "../controllers/solutionController";
import verifyJWT from "../middlewares/verifyJWT";

// router.get("/:chapterIndex/:lessonIndex/", verifyJWT, solutionController.getOne);
// router.post("/:chapterIndex/:lessonIndex/", verifyJWT, solutionController.save);
router.post("/verify", solutionController.verify)
