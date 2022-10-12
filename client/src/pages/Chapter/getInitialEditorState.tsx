import { get } from "../../api/lesson";

export async function getInitialEditorState(
	c_index: string,
	l_index: string
): Promise<string> {
	const res = await get(parseInt(c_index), parseInt(l_index));
	if (res.data.solution) {
		const content: string = res.data.solution.content;
		if (content) return content;
	}
	let initialCode = "";
	if (res.data.lesson) {
		initialCode = res.data.lesson.initial_code;
	}
	return initialCode;
}
