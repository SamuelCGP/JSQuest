const { getOne, save } = require("../models/solutionModel");

exports.getOne = async (req, res) => {
	const lessonIndex = req.params.lessonIndex;
	const chapterIndex = req.params.chapterIndex;
	const userId = req.params.userId;

    console.log({lessonIndex, chapterIndex, userId})

	const solution = await getOne(userId, lessonIndex, chapterIndex);

	if (solution) res.status(200).json({ data: solution });
	else res.status(404).json({ message: "Solution not found" });
};

exports.save = async (req, res) => {
	const lessonIndex = req.params.lessonIndex;
	const chapterIndex = req.params.chapterIndex;
	const userId = req.params.userId;

    const body = req.body;
    const solution = body.solution;

    await save(userId, lessonIndex, chapterIndex, solution);

    res.status(200).json({message: "Solution saved"})
};
