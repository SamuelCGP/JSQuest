const { db } = require("../firestore");

const solutionCollecName = "code_solutions";
export const getOne = async (
	userId: string,
	lessonIndex: number,
	chapterIndex: number
) => {
	const solutionCollec = db.collection(`users/${userId}/${solutionCollecName}`);
	const snapshot = await solutionCollec
		.where("lesson_index", "==", lessonIndex)
		.where("chapter_index", "==", chapterIndex)
		.get();
	console.log(snapshot);
	if (snapshot.empty) {
		return false;
	} else return snapshot.docs[0];
};

export const save = async (
	userId: string,
	lessonIndex: number,
	chapterIndex: number,
	solutionContent: string
) => {
	const solution = await getOne(userId, lessonIndex, chapterIndex);
	const solutionCollec = db.collection(`users/${userId}/${solutionCollecName}`);

	const data = {
		chapter_index: chapterIndex,
		lesson_index: lessonIndex,
		content: solutionContent,
	};

	if (solution) solutionCollec.doc(solution.id).set(data, { merge: true });
	else solutionCollec.doc().set(data);
};
