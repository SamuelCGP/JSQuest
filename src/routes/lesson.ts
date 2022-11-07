import express from "express";
import { getOne, saveSolution, create } from "../controllers/lessonController";
import verifyJWT from "../middlewares/verifyJWT";
export const router = express.Router();

router.get("/:chapterIndex/:lessonIndex", verifyJWT, getOne);
router.post("/:chapterIndex/:lessonIndex/", verifyJWT, saveSolution);
router.post("/:chapterIndex/:lessonIndex/create", create)
