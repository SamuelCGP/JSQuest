import express from "express";
import { getOne, saveSolution } from "../controllers/lessonController";
import verifyJWT from "../middlewares/verifyJWT";
export const router = express.Router();

router.get("/:chapterIndex/:lessonIndex", verifyJWT, getOne);
router.post("/:chapterIndex/:lessonIndex/", verifyJWT, saveSolution);
