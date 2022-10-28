import { ContextObj } from "../exercisesContext";
import { basicTests } from "./basicTests";

export const getTests = (context: ContextObj) => {
	return [
        basicTests.exists(context.m1, "m1"),
        basicTests.exists(context.m2, "m2"),
        basicTests.equals(context.m1, "m1", 23*3.14, "23*3.14"),
        basicTests.equals(context.m2, "m2", 23*3.14, "3.14*23"),

		basicTests.logged(true, "m1 === m2", context._dialog)
	];
};