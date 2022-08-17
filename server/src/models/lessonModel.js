const { getAllFromCollection, getDocById, db } = require("../../firestore");
const { getRefById } = require("./userModel");

const lessonCollecName = "lessons";
const solutionsSubcollecName = "solutions";

exports.getAllFromChapter = async (chapterIndex, completedLessons) => {
	const snapshot = await db
		.collection(`chapters/${chapterIndex}/${lessonCollecName}`)
		.select("title", "type")
		.get();
	const lessons = [];

	await snapshot.forEach(async (lesson) => {
		const completed = completedLessons[lesson.id] ? true : false;
		lessons.push({ id: lesson.id, ...lesson.data(), completed });
	});
	console.log(lessons);
	return lessons;
};

exports.getOne = async (chapterIndex, lessonIndex) => {
	const lesson = await getDocById(
		`/chapters/${chapterIndex}/${lessonCollecName}/`,
		lessonIndex
	);
	if (lesson) return lesson;
	else return false;
};

exports.getSolution = async (chapterIndex, lessonIndex, userId) => {
	const solutionCollec = await db.collection(
		`/chapters/${chapterIndex}/${lessonCollecName}/${lessonIndex}/${solutionsSubcollecName}`
	);
	const snapshot = await solutionCollec
		.select("content")
		.where("user", "==", await getRefById(userId)).get();
	if (snapshot.empty) return false;
	else return snapshot.docs[0];
};

exports.saveSolution = async (chapterIndex, lessonIndex, userId, solutionContent) => {
    const solution = await this.getSolution(chapterIndex, lessonIndex, userId);
	const solutionCollec = await db.collection(
		`/chapters/${chapterIndex}/${lessonCollecName}/${lessonIndex}/${solutionsSubcollecName}`
	);
    const userRef = await getRefById(userId)

	const data = {
		content: solutionContent,
        user: userRef
	};

	if (solution) solutionCollec.doc(solution.id).set(data, { merge: true });
	else solutionCollec.doc().set(data);
}
