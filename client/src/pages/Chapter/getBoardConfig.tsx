import { get } from "../../api/lesson";
import { LessonBoardProps } from "../../components";

export async function getBoardConfig(
	c_index: string,
	l_index: string
): Promise<LessonBoardProps | null> {
	const res = await get(parseInt(c_index), parseInt(l_index));
	const BoardConfig: LessonBoardProps = res.data.lesson.board_config;
	if (BoardConfig) return BoardConfig;
	else {
		const error = null;
		return error;
	}
}
