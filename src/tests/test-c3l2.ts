import { ContextObj } from "../exercisesContext";
import { basicTests } from "./basicTests";

export const getTests = (context: ContextObj) => {
	return [
		basicTests.exists(context.media, "media"),
		basicTests.equals(context.media, "media", (5+3+7+9)/4, '(5+3+7+9)/4'),

		basicTests.logged("APROVADO", "APROVADO", context._dialog),
	];
};
