import { expect } from "chai";
import { Test } from "./mocha";

interface LessonTests {
	[x: number]: Mocha.Test[];
}

interface ChapterTests {
	[x: number]: LessonTests;
}

export const generateTests = async (
	exportedData: any,
	chapterIndex: number,
	lessonIndex: number
) => {
	const tests: ChapterTests = {
		0: {
			0: [
				new Test("hello equals world", () => {
					expect(exportedData.hello, "*Você atribuiu o valor 'world' à constante hello?").to.equal("world");
				}),

				new Test("foo const equals bar", () => {
					expect(exportedData.foo).to.equal("bar");
				}),
			],
		},
	};

	return tests[chapterIndex][lessonIndex];
};
