import { Test } from "mocha";
import { expect } from "chai";
import { ContextObj } from "../exercisesContext";
import { testMessages } from './testMessages';
import { basicTests } from './basicTests';

export const getTests = (context: ContextObj) => {
    return [
        basicTests.exists(context.papel, 'papel'),

        new Test("papel has at maximum 20 characters", () => {
            expect(
                (context.papel as string).length,
                testMessages.maxSize("papel", 20)
            ).to.lessThanOrEqual(20);
        }),

        basicTests.logged(context.papel, 'papel', context._dialog),
    ]
}

