import { Response, Request } from "express";
import { runMochaTests } from "./../mocha";
import { generateTests } from "./../tests";
import vm from "node:vm";
const babel = require("@babel/core");
import { Context } from "../exercisesContext";

export const verify = async (req: Request, res: Response) => {
	const body = req.body;
	const solution = body.solution;
	const chapterIndex = parseInt(req.params.chapterIndex);
	const lessonIndex = parseInt(req.params.lessonIndex);

	let transpiledSolution;
	try {
		transpiledSolution = babel.transformSync(solution, {
			presets: ["@babel/preset-env"],
		})!;
	} catch (error: any) {
		res.status(400).json({
			valid: false,
			message: `${Object.getPrototypeOf(error)}: ${error.reasonCode} at ${
				error.loc.line
			}:${error.loc.column}`,
			runOrCompError: true,
		});
		return;
	}

	let vmContext = new Context().contextObj;

	try {
		vm.runInNewContext(transpiledSolution.code, vmContext);
	} catch (err: any) {
		res.status(400).json({
			message: `${err.name}: ${err.message}`,
			valid: false,
			runOrCompError: true,
		});
		return;
	}

	const tests = await generateTests(vmContext, chapterIndex, lessonIndex);
	runMochaTests("Test suite", tests, transpiledSolution.code)
		.then((result: any) => {
			res.status(200).json({ result, codeToExec: vmContext._commands });
		})
		.catch((reason: any) => {
			res.status(400).json(reason);
		});
};
