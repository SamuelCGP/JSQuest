import { ContextObj } from "../exercisesContext";
import { basicTests } from "./basicTests";

export const getTests = (context: ContextObj) => {
	return [
		basicTests.exists(context.resposta, "resposta"),
		basicTests.equals(context.resposta, "resposta", 2, "resposta correta"),
        basicTests.logged(context.resposta, "resposta", context._dialog)
	];
};