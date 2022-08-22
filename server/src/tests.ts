import { expect } from "chai";
import { Test } from "./mocha";

interface LessonTests {
	[x: number]: Mocha.Test[];
}

interface ChapterTests {
	[x: number]: LessonTests;
}

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
	const lessonTests = await import(`./tests/test-c${chapterIndex}l${lessonIndex}`)
	return lessonTests.getTests(context);

	// const tests: ChapterTests = {
	// 	0: {
	// 		0: [
	// 			new Test("hello equals world", () => {
	// 				expect(
	// 					context.hello,
	// 					"*Você atribuiu o valor 'world' à constante hello?"
	// 				).to.equal("world");
	// 			}),
	// 		],
	// 	},
	// };

	// return tests[chapterIndex][lessonIndex];
};
