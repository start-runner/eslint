export default function(files = [ '.' ], options, formatter) {
    return function eslint(resolve, reject) {
        process.env.NODE_ENV = 'test';

        const { CLIEngine } = require('eslint');

        const cli = new CLIEngine(options);
        const report = cli.executeOnFiles(files);
        const format = cli.getFormatter(formatter);

        if (report.errorCount > 0 || report.warningCount > 0) {
            console.log(format(report.results));
        }

        if (report.errorCount === 0 && report.warningCount === 0) {
            return resolve('¯\\_(ツ)_/¯');
        }

        if (report.errorCount > 0) {
            return reject('(╯°□°)╯︵┻━┻');
        }

        // just resolve if there were no "hard" errors
        resolve();
    };
}
