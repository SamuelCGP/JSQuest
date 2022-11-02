import refreshEditorState from "./refreshEditorState";

export function getInitialEditorState(lessonData: any): string {
	if (lessonData.solution) {
		const content: string = lessonData.solution.content;
		if (content) return content;
	}

	return refreshEditorState(lessonData);
}
