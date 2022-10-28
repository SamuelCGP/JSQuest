import { ContextObj } from "../exercisesContext";
import { basicTests } from "./basicTests";

export const getTests = (context: ContextObj) => {
	return [
		basicTests.exists(context.x, 'x'),
		basicTests.exists(context.y, 'y'),
		basicTests.equals(context.x, 'x', 10),
		basicTests.equals(context.y, 'y', 5),
		basicTests.exists(context.soma, 'soma'),
		basicTests.exists(context.subtracao, 'subtracao'),
		basicTests.exists(context.multiplicacao, 'multiplicacao'),
		basicTests.exists(context.divisao, 'divisao'),
		basicTests.exists(context.resto, 'resto'),
		basicTests.equals(context.soma, 'soma', context.x + context.y, 'x + y'),
		basicTests.equals(context.subtracao, 'subtracao', context.x - context.y, 'x - y'),
		basicTests.equals(context.multiplicacao, 'multiplicacao', context.x * context.y, 'x * y'),
		basicTests.equals(context.divisao, 'divisao', context.x / context.y, 'x / y'),
		basicTests.equals(context.resto, 'resto', context.x % context.y, 'x % y'),
		basicTests.logged(context.soma, 'soma', context._dialog),
		basicTests.logged(context.subtracao, 'subtracao', context._dialog),
		basicTests.logged(context.multiplicacao, 'multiplicacao', context._dialog),
		basicTests.logged(context.divisao, 'divisao', context._dialog),
		basicTests.logged(context.resto, 'resto', context._dialog),
	];
};
