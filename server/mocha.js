const Mocha = require('mocha');

const Test = Mocha.Test;
const Suite = Mocha.Suite;


const runMochaTests = (suiteName = "Test suite", tests) => {
    const mocha = new Mocha({})
    const suite = Suite.create(mocha.suite, suiteName);
    tests.forEach(test => suite.addTest(test));
    let passes = 0;
    let failures = 0;

    return new Promise((resolve, reject) => {
        mocha.run().on('test', function (test) {
            console.log('Test started: ' + test.title);
        })
            .on('test end', function (test) {
                console.log('Test done: ' + test.title);
            })
            .on('pass', function (test) {
                console.log('Test passed');
                console.log(test);
                passes++;
            })
            .on('fail', function (test, err) {
                console.log('Test fail');
                console.log(test);
                console.log(err);
                failures++;
            })
            .on('end', function () {
                if (failures > 0) reject('testing failed')
                else resolve('testing succeeded');
            })
    })
}

module.exports = { Suite, Test, runTests, suite }