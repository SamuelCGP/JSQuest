import { verifySolution } from "../api/solution";
import { robotMethods } from "./robotMethods";

export const runCode = (
	chapterIndex: number,
	lessonIndex: number,
	code: any
) => {
	console.log(code);
	/*
	const runRes = verifySolution(chapterIndex, lessonIndex, code).then(
		(res) => {
			console.log(res);
			return res;
		}
	);
	*/
	robotMethods.andar("esquerda");
};
