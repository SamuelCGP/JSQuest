import { db, getAllFromCollection, getDocById } from "../firestore";
import { getAllFromChapter } from "./lessonModel";
import { getById } from "./userModel";

const chapterCollectionName = "chapters";

export interface Chapter {
	title: string;
	description: string;
}

export const getAll = async (userId: string) => {
	let chapters = await getAllFromCollection(chapterCollectionName);

	const user = await getById(userId);
	if (!user) return;

	const completedLessons: string[] = user.data()!.completed_lessons;

	chapters = await Promise.all(
		chapters.map(async (chapter, index) => {
			chapter.data.lessons = await getAllFromChapter(
				index,
				completedLessons
			);
			return chapter;
		})
	);

	return chapters;
};

export const getOne = async (chapterId: string) => {
	return await getDocById(chapterCollectionName, chapterId);
};

export const create = async (chapterIndex: string, chapter: Chapter) => {
	await db
		.collection(`/${chapterCollectionName}`)
		.doc(chapterIndex)
		.set(chapter, { merge: true });
};
