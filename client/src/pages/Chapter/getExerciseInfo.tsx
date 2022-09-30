import { get } from "../../api/lesson";
import { ExerciseInfoProps } from "../../components";

export async function getExerciseInfo(
	c_index: string,
	l_index: string
): Promise<ExerciseInfoProps | null> {
	const res = await get(parseInt(c_index), parseInt(l_index));
	const title = res.data.lesson.title;
	const text = res.data.lesson.text;
	if (title) {
		const exerciseInfo: ExerciseInfoProps = {
			title: title,
			text: text,
		};
		console.log(exerciseInfo);
		return exerciseInfo;
	} else {
		const error = null;
		return error;
	}
}
