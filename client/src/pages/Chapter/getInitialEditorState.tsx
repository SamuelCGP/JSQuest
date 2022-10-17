export function getInitialEditorState(lessonData: any): string {
	if (lessonData.solution) {
		const content: string = lessonData.solution.content;
		if (content) return content;
	}
	let initialCode = "";
	if (lessonData.lesson) {
		initialCode = lessonData.lesson.initial_code;
	}
	return initialCode;
}
