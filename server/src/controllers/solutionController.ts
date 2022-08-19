import * as solutionModel from "../models/solutionModel";
import fs from "fs";
import path from "path";
import babel, { BabelFileResult } from "@babel/core";
import { Response, Request } from "express";

export const getOne = async (req: Request, res: Response) => {
	const lessonIndex = parseInt(req.params.lessonIndex);
	const chapterIndex = parseInt(req.params.chapterIndex);
	const userId = req.userId;

	console.log({ lessonIndex, chapterIndex, userId });

	const solution = await solutionModel.getOne(
		userId,
		lessonIndex,
		chapterIndex
	);

	if (solution) res.status(200).json({ solution: solution.data() });
	else res.status(404).json({ message: "Solution not found" });
};

export const save = async (req: Request, res: Response) => {
	const lessonIndex = parseInt(req.params.lessonIndex);
	const chapterIndex = parseInt(req.params.chapterIndex);
	const userId = req.userId;

	const body = req.body;
	const solution = body.solution;

	await solutionModel.save(userId, lessonIndex, chapterIndex, solution);

	res.status(200).json({ message: "Solution saved" });
};

export const verify = async (req: Request, res: Response) => {
	/*TODO adicionar métodos que o usuário pode chamar
	para funcionalidades como andar*/
	/*TODO adicionar uma forma de separar os arquivos de solução por usuário, capítulo e lição*/
	/*TODO atualizar o esquema de salvamento e requisição de soluções para ser por arquivo
	ao invés de pelo banco de dados*/

	const body = req.body;
	const solution = body.solution;

	const solutionFunction = new Function(solution);

	let transpiledSolution: BabelFileResult;
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
		});
		return;
	}

	const solutionFolder = __dirname + "/../../solutions/chapters/0/lessons/0/";
	fs.writeFileSync(solutionFolder + "teste.js", transpiledSolution.code!);
	const options = {
		projects: [solutionFolder],
		silent: true,
	};

	// try {
	// 	const result = await jest.runCLI({ silent: true }, options.projects);
	// 	const testSuccess = result.results.success;
	// 	if (testSuccess) {
	// 		res.status(200).json({ valid: testSuccess, message: "Solution valid!" });
	// 	} else {
	// 		const message = formatJSErrorString(
	// 			result.results.numRuntimeErrorTestSuites,
	// 			result.results.testResults[0]
	// 		);
	// 		res.status(400).json({ valid: testSuccess, message });
	// 	}
	// } catch (err) {
	// 	console.log(err);
	// 	res.status(500).json({ err });
	// }
};

const formatJSErrorString = (runtimeErrorNum: number, error: any) => {
	if (runtimeErrorNum == 0) {
		const results = error.testResults;
		for (let i = 0; i < results.length; i++) {
			if (error.testResults[i].status != "passed")
				return results[i].failureDetails[0].message
					.substring(8)
					.replaceAll('"', "");
		}
	} else return error.failureMessage.split("\n")[2].trim();
};
