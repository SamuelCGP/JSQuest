import { ContextObj } from "../exercisesContext";
import { basicTests } from "./basicTests";
import { Test } from '../mocha';
import { expect } from 'chai';

export const getTests = (context: ContextObj) => {
	return [
		basicTests.exists(context.sequencia, "sequencia"),
		new Test("sequencia moves robot properly", () => {
            const prevX = context._xPos;
            const prevY = context._yPos;
            expect(context.sequencia, '*sequencia não é uma função').to.be.a('function')
            if(typeof(context.sequencia) == 'function') {
                context.sequencia();
                expect(context._xPos).to.equal(prevX + 1, '*sequencia não moveu o robô corretamente');
                expect(context._yPos).to.equal(prevY - 1, '*sequencia não moveu o robô corretamente');
            }
        }),
	];
};
