const { getOne, save } = require("../models/solutionModel");
const fs = require("fs");
const path = require("path");
const jest = require("jest");
const babel = require("@babel/core");

exports.getOne = async (req, res) => {
	const lessonIndex = parseInt(req.params.lessonIndex);
	const chapterIndex = parseInt(req.params.chapterIndex);
	const userId = req.userId;

	console.log({ lessonIndex, chapterIndex, userId });

	const solution = await getOne(userId, lessonIndex, chapterIndex);

	if (solution) res.status(200).json({ solution: solution.data() });
	else res.status(404).json({ message: "Solution not found" });
};

exports.save = async (req, res) => {
	const lessonIndex = parseInt(req.params.lessonIndex);
	const chapterIndex = parseInt(req.params.chapterIndex);
	const userId = req.userId;

	const body = req.body;
	const solution = body.solution;

	await save(userId, lessonIndex, chapterIndex, solution);

	res.status(200).json({ message: "Solution saved" });
};

exports.verify = async (req, res) => {
	/*TODO adicionar métodos que o usuário pode chamar
	para funcionalidades como andar*/
	/*TODO adicionar uma forma de separar os arquivos de solução por usuário, capítulo e lição*/
	/*TODO atualizar o esquema de salvamento e requisição de soluções para ser por arquivo
	ao invés de pelo banco de dados*/

	const body = req.body;
	const solution = body.solution;

	const solutionFunction = new Function(solution);

	let transpiledSolution;
	try {
		transpiledSolution = babel.transformSync(solution, {
			presets: ["@babel/preset-env"],
		});
	} catch (error) {
		res.status(400).json({
			valid: false,
			message: `${Object.getPrototypeOf(error)}: ${error.reasonCode} at ${
				error.loc.line
			}:${error.loc.column}`,
		});
		return;
	}

	const solutionFolder = __dirname + "/../../solutions/chapters/0/lessons/0/";
	fs.writeFileSync(solutionFolder + "teste.js", transpiledSolution.code);
	const options = {
		projects: [solutionFolder],
		silent: true,
	};

	try {
		const result = await jest.runCLI({ silent: true }, options.projects);
		const testSuccess = result.results.success;
		if (testSuccess) {
			res.status(200).json({ valid: testSuccess, message: "Solution valid!" });
		} else {
			const message = formatJSErrorString(
				result.results.numRuntimeErrorTestSuites,
				result.results.testResults[0]
			);
			res.status(400).json({ valid: testSuccess, message });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ err });
	}
};

const formatJSErrorString = (runtimeErrorNum, error) => {
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
