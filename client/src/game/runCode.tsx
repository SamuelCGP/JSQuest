import { verifySolution } from "../api/solution";
import { robotMethods } from "./robotMethods";

export const runCode = (
	chapterIndex: number | any,
	lessonIndex: number | any,
	code: any
) => {
	const runRes: any = verifySolution(chapterIndex, lessonIndex, code).then(
		(res) => {
			return res;
		}
	);

	switch (runRes.status) {
		case 400:
			handleSolutionFailure(runRes);
			break;
		case 200:
			handleSolutionSuccess(runRes);
			break;
	}
};

const handleSolutionFailure = (res: any) => {};

const handleSolutionSuccess = (res: any) => {};
