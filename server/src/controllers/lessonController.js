const { db } = require("../../firestore");
const { getOne, getSolution, saveSolution } = require("../models/lessonModel");

exports.getOne = async (req, res) => {
	const chapterIndex = req.params.chapterIndex;
	const lessonIndex = req.params.lessonIndex;

	console.log({chapterIndex, lessonIndex})
	const lesson = (await getOne(chapterIndex, lessonIndex)).data();
	console.log({lesson})
	const solution = (await getSolution(chapterIndex, lessonIndex, req.userId)).data();
	console.log({solution})
	if (lesson) res.status(200).json({ lesson, solution });
	else res.status(404).json({ message: "Lesson not found" });
};

exports.saveSolution = async (req, res) => {
	const chapterIndex = req.params.chapterIndex;
	const lessonIndex = req.params.lessonIndex;

	const body = req.body;
	const solution = body.solution;

	await saveSolution(chapterIndex, lessonIndex, req.userId, solution);
	res.status(200).json({ message: "Solution saved!" });
};
