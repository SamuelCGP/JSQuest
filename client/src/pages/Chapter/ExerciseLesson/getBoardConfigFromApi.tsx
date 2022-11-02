import { LessonBoardProps } from "../../../components";

export function getBoardConfigFromApi(
	lessonData: any
): LessonBoardProps | null {
	if (lessonData.lesson) {
		const BoardConfig: LessonBoardProps = lessonData.lesson.board_config;
		if (BoardConfig) return BoardConfig;
	}

	const error = null;
	return error;
}
