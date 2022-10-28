import { Test } from "mocha";
import { expect } from "chai";
import { testMessages } from './testMessages';
import { basicTests } from './basicTests';

export const getTests = (context: any) => {
    return [
        basicTests.exists(context.nome, 'nome'),

        new Test("nome has at maximum 10 characters", () => {
            expect(
                (context.nome as string).length,
                testMessages.maxSize("nome", 10)
            ).to.lessThanOrEqual(10);
        })
    ]
}

