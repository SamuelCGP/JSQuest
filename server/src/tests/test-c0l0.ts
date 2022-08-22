import { TestData } from "../tests";
import { Test } from "mocha";
import { expect } from "chai";

export const getTests = (context: any) => {
    return [
        new Test("hello equals world", () => {
            expect(
                context.hello,
                "*Você atribuiu o valor 'world' à constante hello?"
            ).to.equal("world");
        }),
    ]
}

