export interface TestData {
	context: any
	name: string
	function: Function
}

export const generateTests = async (
	context: any,
	chapterIndex: number,
	lessonIndex: number
) => {
	try {
		const lessonTests = await import(`./tests/test-c${chapterIndex}l${lessonIndex}`)
		return lessonTests.getTests(context);
	} catch(err) {
		return [];
	}
};
