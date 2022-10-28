import { ContextObj } from "../exercisesContext";
import { basicTests } from "./basicTests";

export const getTests = (context: ContextObj) => {
	return [
		basicTests.exists(context.ab, "ab"),
		basicTests.exists(context.cd, "cd"),
		basicTests.exists(context.ef, "ef"),
		basicTests.equals(context.ab, "ab", 16),
		basicTests.equals(context.cd, "cd", 20),
		basicTests.equals(context.ef, "ef", 30),

		basicTests.logged("POSSÍVEL", "POSSÍVEL", context._dialog),
	];
};
