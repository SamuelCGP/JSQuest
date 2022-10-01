import { Request, Response } from "express";
import * as lessonModel from "../models/lessonModel";

export const getOne = async (req: Request, res: Response) => {
	const chapterIndex = req.params.chapterIndex;
	const lessonIndex = req.params.lessonIndex;

	console.log({ chapterIndex, lessonIndex });
	const lesson = await lessonModel.getOne(chapterIndex, lessonIndex);
	if (!lesson) {
		res.status(404).json({ message: "Lesson not found" });
		return;
	}
	const lessonData = lesson.data();

	const solution = await lessonModel.getSolution(
		chapterIndex,
		lessonIndex,
		req.userId
	);
	if (!solution) {
		res.status(200).json({ lesson: lessonData });
		return;
	}
	const solutionData = solution.data();

	res.status(200).json({ lesson: lessonData, solution: solutionData });
};

export const saveSolution = async (req: Request, res: Response) => {
	const chapterIndex = req.params.chapterIndex;
	const lessonIndex = req.params.lessonIndex;

	const body = req.body;
	const solution = body.solution;

	await lessonModel.saveSolution(chapterIndex, lessonIndex, req.userId, solution);
	res.status(200).json({ message: "Solution saved!" });
};
