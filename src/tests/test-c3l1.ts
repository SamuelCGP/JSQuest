import { expect } from "chai";
import { ContextObj } from "../exercisesContext";
import { Test } from "../mocha";
import { basicTests } from "./basicTests";

export const getTests = (context: ContextObj) => {
	return [
		basicTests.exists(context.paredeAdiante, 'paredeAdiante'),
        new Test("paredeAdiante equals true or false", () => {
            expect([true, false]).to.contain(context.paredeAdiante)
        }),
        new Test("paredeAdiante equals true or false", () => {
            expect(context._dialog).to.contain(context.paredeAdiante)
        }),
	];
};
