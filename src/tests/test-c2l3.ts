import { ContextObj } from "../exercisesContext";
import { basicTests } from "./basicTests";

export const getTests = (context: ContextObj) => {
	return [
		basicTests.exists(context.n, "n"),
		basicTests.exists(context.nPar, "nPar"),
		basicTests.exists(context.nImpar, "nImpar"),
		basicTests.equals(context.nPar, "nPar", false, "n % 2 === 0"),
		basicTests.equals(context.nImpar, "nImpar", true, "n % 2 === 1"),
		basicTests.logged(context.nPar, "nPar", context._dialog),
		basicTests.logged(context.nImpar, "nImpar", context._dialog),
	];
};
