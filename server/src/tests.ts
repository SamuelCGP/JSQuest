import { expect } from "chai";
import { Test } from "./mocha";

interface LessonTests {
	[x: number]: Mocha.Test[];
}

interface ChapterTests {
	[x: number]: LessonTests;
}

export const generateTests = async (
	context: any,
	chapterIndex: number,
	lessonIndex: number
) => {
	const tests: ChapterTests = {
		0: {
			0: [
				new Test("hello equals world", () => {
					console.log({ exportedData: context });
					expect(
						context.hello,
						"*Você atribuiu o valor 'world' à constante hello?"
					).to.equal("world");
				}),
			],
		},
	};

	return tests[chapterIndex][lessonIndex];
};
