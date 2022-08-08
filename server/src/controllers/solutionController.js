const { getOne, save } = require("../models/solutionModel");

exports.getOne = async (req, res) => {
	const lessonIndex = parseInt(req.params.lessonIndex);
	const chapterIndex = parseInt(req.params.chapterIndex);
	const userId = req.userId;

    console.log({lessonIndex, chapterIndex, userId})

	const solution = await getOne(userId, lessonIndex, chapterIndex);

	if (solution) res.status(200).json({ solution: solution.data() });
	else res.status(404).json({ message: "Solution not found" });
};

exports.save = async (req, res) => {
	const lessonIndex = parseInt(req.params.lessonIndex);
	const chapterIndex = parseInt(req.params.chapterIndex);
	const userId = req.userId;

    const body = req.body;
    const solution = body.solution;

    await save(userId, lessonIndex, chapterIndex, solution);

    res.status(200).json({message: "Solution saved"})
};
