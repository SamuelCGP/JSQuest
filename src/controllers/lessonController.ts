import { Request, Response } from "express";
import * as lessonModel from "../models/lessonModel";

export const getOne = async (req: Request, res: Response) => {
	const chapterIndex = req.params.chapterIndex;
	const lessonIndex = req.params.lessonIndex;

	const lesson = await lessonModel.getOne(chapterIndex, lessonIndex);
	if (!lesson) {
		res.status(404).json({ message: "Lesson not found" });
		return;
	}
	const lessonData = lesson.data();

	//console.log(lessonData!.board_config.elements);

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

	console.log(JSON.stringify({ lesson: lessonData, solution: solutionData }));

	res.status(200).json({ lesson: lessonData, solution: solutionData });
};

export const saveSolution = async (req: Request, res: Response) => {
	const chapterIndex = req.params.chapterIndex;
	const lessonIndex = req.params.lessonIndex;

	const body = req.body;
	const solution = body.solution;

	await lessonModel.saveSolution(
		chapterIndex,
		lessonIndex,
		req.userId,
		solution
	);
	res.status(200).json({ message: "Solution saved!" });
};

export const create = async (req: Request, res: Response) => {
	const chapterIndex = req.params.chapterIndex;
	const lessonIndex = req.params.lessonIndex;

	const body = req.body;
	const lesson = body.lesson;

	await lessonModel.create(chapterIndex, lessonIndex, lesson);
	res.status(200).json({ message: "Lesson saved!" });
};

export const complete = async (req: Request, res: Response) => {
	const chapterIndex = req.params.chapterIndex;
	const lessonIndex = req.params.lessonIndex;

	await lessonModel.completeLesson(req.userId, chapterIndex, lessonIndex);

	res.status(200).json({ message: "Lesson completed!" });
};
