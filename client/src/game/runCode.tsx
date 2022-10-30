import { verifySolution } from "../api/solution";
import { andar, randomId } from "./robotMethods";
import * as signals from "./signals";

export const runCode = (
	chapterIndex: number | any,
	lessonIndex: number | any,
	code: any
) => {
	const runRes: any = verifySolution(chapterIndex, lessonIndex, code).then(
		(res) => {
			switch (res.status) {
				case 200:
					handleSolutionSuccess(res);
					break;
				default:
					handleSolutionFailure(res);
					break;
			}
			return res;
		}
	);
};

const handleSolutionFailure = (res: any) => {
	console.log(res);
};

const handleSolutionSuccess = (res: any) => {
	console.log(res);

	let codeToExec = res.data.codeToExec ? res.data.codeToExec : null;
	if (codeToExec !== "" && codeToExec !== null) {
		const splitedCode = codeToExec.split(";");
		console.log("split", splitedCode);

		const context =
			`const _signals__WEBPACK_IMPORTED_MODULE_0__ = {fireSignal: ${signals.fireSignal}};` +
			`const andar = ${andar};` +
			`const randomId = ${randomId};`;

		codeToExec =
			context +
			`setTimeout(() => {${splitedCode[0]}}, 1000);` +
			`setTimeout(() => {${splitedCode[1]}}, 2000);` +
			`setTimeout(() => {${splitedCode[2]}}, 3000);`;
		console.log(codeToExec);
		eval(codeToExec);
	} else {
	}
};
