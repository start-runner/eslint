export default (options, formatter) => (input) => {
    return function eslint(/* log */) {
        const CLIEngine = require('eslint').CLIEngine;

        return new Promise((resolve, reject) => {
            const cli = new CLIEngine(options);
            const files = input.filter(file => cli.isPathIgnored(file));
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
        });
    };
};
