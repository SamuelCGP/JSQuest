const Mocha = require('mocha');

const Test = Mocha.Test;
const Suite = Mocha.Suite;


const createMochaInstance = (suiteName = "Test suite") => {
    const mocha = new Mocha({})
    const suite = () => Suite.create(mocha.suite, suiteName);
    mocha.runTests = runTests;
}


const runTests = () => {
    var passes = 0;
    var failures = 0;
    // return new Promise((resolve, reject) => {
    //     mocha.run((failures) => {
    //         if (failures) reject('Testing failed');
    //         else resolve('Testing succeeded');
    //     })
    // })
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