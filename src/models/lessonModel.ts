import { getDocById, db, save } from "../firestore";
import { getRefById } from "./userModel";

const lessonCollecName = "lessons";
const solutionsSubcollecName = "solutions";

export enum LessonTypes {
	PRACTICAL = "practical",
	THEORICAL = "theorical",
}
export interface BoardElement {
	element: string;
	x: number;
	y: number;
}

export interface Lesson {
	board_config: {
		build: {
			columns: number;
			rows?: number;
		};
		elements: BoardElement[];
	};
	initial_code?: string;
	text?: string;
	title: string;
	type: LessonTypes;
}

export const getAllFromChapter = async (
	chapterIndex: number,
	completedLessons: boolean[]
) => {
	interface ChapterData {
		id: string;
		completed: boolean;
	}

	const snapshot = await db
		.collection(`chapters/${chapterIndex}/${lessonCollecName}`)
		.select("title", "type")
		.get();
	const lessons: ChapterData[] = [];

	snapshot.forEach(async (lesson) => {
		const completed = completedLessons[parseInt(lesson.id)] ? true : false;
		const chapterData: ChapterData = {
			id: lesson.id,
			...lesson.data(),
			completed,
		};
		lessons.push(chapterData);
	});
	console.log(lessons);
	return lessons;
};

export const getOne = async (chapterIndex: string, lessonIndex: string) => {
	const lesson = await getDocById(
		`/chapters/${chapterIndex}/${lessonCollecName}/`,
		String(lessonIndex)
	);
	if (lesson) return lesson;
	else return false;
};

export const getSolution = async (
	chapterIndex: string,
	lessonIndex: string,
	userId: string
) => {
	const solutionCollec = await db.collection(
		`/chapters/${chapterIndex}/${lessonCollecName}/${lessonIndex}/${solutionsSubcollecName}`
	);
	const snapshot = await solutionCollec
		.select("content")
		.where("user", "==", await getRefById(userId))
		.get();
	if (snapshot.empty) return false;
	else return snapshot.docs[0];
};

export const saveSolution = async (
	chapterIndex: string,
	lessonIndex: string,
	userId: string,
	solutionContent: string
) => {
	const solution = await getSolution(chapterIndex, lessonIndex, userId);
	const solutionCollec = await db.collection(
		`/chapters/${chapterIndex}/${lessonCollecName}/${lessonIndex}/${solutionsSubcollecName}`
	);
	const userRef = await getRefById(userId);

	const data = {
		content: solutionContent,
		user: userRef,
	};

	if (solution) solutionCollec.doc(solution.id).set(data, { merge: true });
	else solutionCollec.doc().set(data);
};

export const create = async (
	chapterIndex: string,
	lessonIndex: string,
	lesson: Lesson
) => {
	await db
		.collection(`/chapters/${chapterIndex}/${lessonCollecName}/`)
		.doc(lessonIndex)
		.set(lesson, { merge: true });
};
