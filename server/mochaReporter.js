var mocha = require('mocha');

module.exports = (runner) => {
    mocha.reporters.Base.call(this, runner);
    var passes = 0;
    var failures = 0;

    runner.on('pass', test => {
        passes++;
        console.log('pass ' + test.fullTitle);
    });

    runner.on('fail', (test, err) => {
        failures++;
        console.log('fail: ' + test.fullTitle + '\nreason: ' + err.message);
    });

    runner.on('end', function () {
        console.log('end: %d/%d', passes, passes + failures);
        process.exit(failures);
    });
}