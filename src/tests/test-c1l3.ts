import { ContextObj } from "../exercisesContext";
import { basicTests } from "./basicTests";

export const getTests = (context: ContextObj) => {
	return [
		basicTests.exists(context.x1, "x1"),
		basicTests.equals(context.x1, "x1", (3 + Math.sqrt((-3*-3) - (4*-1*9)))/2*1, "resposta correta"),
		basicTests.exists(context.x2, "x2"),
		basicTests.equals(context.x2, "x2", (3 - Math.sqrt((-3*-3) - (4*-1*9)))/2*1, "resposta correta"),

        basicTests.logged(context.x1, "x1", context._dialog),
        basicTests.logged(context.x1, "x2", context._dialog)
	];
};