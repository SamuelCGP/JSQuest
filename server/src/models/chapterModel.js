const { getAllFromCollection, getDocById } = require("../../firestore");
const { getAllFromChapter } = require("./lessonModel");
const { getById } = require("./userModel");

const chapterCollectionName = "chapters";

exports.getAll = async (userId) => {
	let chapters = await getAllFromCollection(chapterCollectionName);
	const user = await getById(userId);
	const completedLessons = user.data().completed_lessons;

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

exports.getOne = async (chapterId) => {
	return await getDocById(chapterCollectionName, chapterId);
};
