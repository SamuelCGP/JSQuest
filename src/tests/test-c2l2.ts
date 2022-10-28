import { ContextObj } from "../exercisesContext";
import { basicTests } from "./basicTests";

export const getTests = (context: ContextObj) => {
	return [
		basicTests.exists(context.soma1, "soma1"),
		basicTests.equals(context.soma1, "soma1", "11", '1 + "1"'),

        basicTests.exists(context.soma2, "soma2"),
        basicTests.equals(context.soma2, "soma2", 2, '1 + 1'),

		basicTests.logged(context.soma, "soma", context._dialog),
        basicTests.logged(false, "soma1 === soma2", context._dialog),
        basicTests.logged(true, "soma1 == soma2", context._dialog)
	];
};
