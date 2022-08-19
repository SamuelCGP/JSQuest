import { Response, Request } from "express";
import { runMochaTests } from "./../mocha";
import { generateTests } from "./../tests";
import { importFromStringSync } from "module-from-string";

export const verify = async (req: Request, res: Response) => {
	/*TODO adicionar métodos que o usuário pode chamar
	para funcionalidades como andar*/
	/*TODO adicionar uma forma de separar os arquivos de teste*/

	const body = req.body;
	const solution = body.solution;

	let data;

	try {
		data = importFromStringSync(solution);
	} catch (err: any) {
		res
			.status(400)	
			.json({
				message: `${err.name}: ${err.message}`,
				valid: false,
				runOrCompError: true,
			});
		return;
	}

	const tests = await generateTests(data, 0, 0);
	runMochaTests("Test suite", tests)
		.then((result: any) => {
			res.status(200).json(result);
		})
		.catch((reason: any) => {
			res.status(400).json(reason);
		});
};