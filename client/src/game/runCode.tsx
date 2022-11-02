import { verifySolution } from "../api/solution";
import { gameMethods } from "./gameMethods";
import * as signals from "./signals";

export interface Command {
	[key: string]: any[];
}

export const runCode = (
	chapterIndex: number | any,
	lessonIndex: number | any,
	code: any
) => {
	verifySolution(chapterIndex, lessonIndex, code).then((res) => {
		switch (res.status) {
			case 200:
				handleSolutionSuccess(res);
				break;
			default:
				handleSolutionFailure(res);
				break;
		}
		return res;
	});
};

const handleSolutionFailure = (res: any) => {
	console.log(res);
	alert(res.data.message);
};

const handleSolutionSuccess = (res: any) => {
	console.log(res);

	const commands: Command[] = res.data.codeToExec!;
	const interval = 500;

	commands.forEach((command, index) => {
		setTimeout(function () {
			const commandName: string = Object.keys(command)[0];
			const args: any[] = command[commandName];

			gameMethods[commandName](...args);
		}, index * interval);
	});
};
