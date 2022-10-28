import { ContextObj } from "../exercisesContext";
import { basicTests } from "./basicTests";
import { Test } from '../mocha';
import { expect } from 'chai';

export const getTests = (context: ContextObj) => {
	return [
		new Test("logged multiplication table", () => {
            for(let i = 1; i <= 10; i++) {
                expect(context._dialog, "A tabuada não foi logada corretamente").to.contain(`${i} x 37 = ${i*37}`)
            }
        })
	];
};
