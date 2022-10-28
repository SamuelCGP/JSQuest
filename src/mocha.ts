import Mocha from "mocha";

export const Test = Mocha.Test;
export const Suite = Mocha.Suite;

export const runMochaTests = (
	suiteName = "Test suite",
	tests: Mocha.Test[],
	transpiledSolution: string
) => {
	const mocha = new Mocha({reporter: undefined});
	const suite = Suite.create(mocha.suite, suiteName);
	tests.forEach((test: Mocha.Test) => suite.addTest(test));
	return new Promise((resolve, reject) => {
		mocha
			.run()
			.on("test", function (test) {
				console.log("Test started: " + test.title);
			})
			.on("test end", function (test) {
				console.log("Test done: " + test.title);
			})
			.on("pass", function (test) {
				console.log("Test passed");
				console.log(test);
			})
			.on("fail", function (test, err) {
				console.log("Test fail");
				reject({
					message: formatErrorMessage(err),
					test: test.title,
					valid: false,
					runOrCompError: false,
				});
			})
			.on("end", function () {
				resolve({
					message: `Tests succeeded!`,
					valid: true,
					runOrCompError: false,
					transpiledSolution
				});
			});
	});
};

const formatErrorMessage = (err: Error) => {
	if(err.message.startsWith('*')) {
		return err.message.substring(1, err.message.indexOf(':'))
	}

	return `${err.name}: ${err.message}`
}