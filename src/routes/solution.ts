import express from "express";
export const router = express.Router();

import * as solutionController from "../controllers/solutionController";
import verifyJWT from "../middlewares/verifyJWT";

router.post(
	"/verify/:chapterIndex/:lessonIndex",
	verifyJWT,
	solutionController.verify
);
