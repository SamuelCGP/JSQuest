import { ExerciseInfoProps } from "../../../components";

export function getExerciseInfoFromApi(
	lessonData: any
): ExerciseInfoProps | null {
	const title = lessonData.lesson.title;
	const text = lessonData.lesson.text;
	if (title) {
		const exerciseInfo: ExerciseInfoProps = {
			title: title,
			text: text,
		};
		return exerciseInfo;
	} else {
		const error = null;
		return error;
	}
}
