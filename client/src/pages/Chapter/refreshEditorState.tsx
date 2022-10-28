export default function (lessonData: { lesson: { initial_code: string } }) {
	return lessonData.lesson ? lessonData.lesson.initial_code : "";
}
