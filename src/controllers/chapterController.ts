import { Request, Response } from "express";
import * as chapterModel from "../models/chapterModel";

export const getAll = async (req: Request, res: Response) => {
	const chapters = await chapterModel.getAll(req.userId);
	res.status(200).json({ chapters });
};

export const getOne = async (req: Request, res: Response) => {
	const chapterId = req.params.id;

	const chapter = await chapterModel.getOne(chapterId);

	if (chapter) res.status(200).json({ chapter });
	else res.status(400).json({ message: "Invalid chapter ID" });
};

export const create = async (req: Request, res: Response) => {
	const chapterId = req.params.id;

	const body = req.body;
	const chapter = body.chapter;

	await chapterModel.create(chapterId, chapter);
	res.status(200).json({ message: "Chapter created!" });
};
