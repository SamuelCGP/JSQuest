import { expect } from "chai";
import { Test } from "../mocha";
import { testMessages } from "./testMessages";
export const basicTests = {
	exists: (value: any, valueName: string) => {
		return new Test(`${valueName} exists`, () => {
			expect(value, testMessages.exists(valueName)).to.exist;
		});
	},
	equals: (
		value: any,
		valueName: string,
		toEqual: any,
		toEqualName: any = toEqual
	) => {
		return new Test(`${valueName} equals ${toEqualName}`, () => {
			expect(value, testMessages.equals(valueName, toEqualName)).to.equal(
				toEqual
			);
		});
	},
	logged: (value: any, valueName: string, dialog: any) => {
		return new Test(`logged ${valueName}`, () => {
			expect(dialog, `*Você logou ${valueName}?`).to.contain(String(value));
		});
	},
};
