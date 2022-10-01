import { getAllFromCollection, getDocById } from "../firestore";
import { getAllFromChapter } from "./lessonModel";
import { getById } from "./userModel";

const chapterCollectionName = "chapters";

export interface UserCompletedLessons {
	[x: string]: boolean[];
}
export const getAll = async (userId: string) => {
	let chapters = await getAllFromCollection(chapterCollectionName);

	const user = await getById(userId);
	if (!user) return;

	const completedLessons: UserCompletedLessons = user.data()!.completed_lessons;

	chapters = await Promise.all(
		chapters.map(async (chapter, index) => {
			chapter.data.lessons = await getAllFromChapter(
				index,
				completedLessons[index]
			);
			return chapter;
		})
	);

	return chapters;
};

export const getOne = async (chapterId: string) => {
	return await getDocById(chapterCollectionName, chapterId);
};