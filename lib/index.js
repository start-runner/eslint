export default (options, formatter) => (input) => {
    return function eslint(log) {
        const path = require('path');
        const CLIEngine = require('eslint').CLIEngine;

        return new Promise((resolve, reject) => {
            const cli = new CLIEngine(options);
            const files = input.filter(file => {
                return !cli.isPathIgnored(
                    // temp workaround for https://github.com/eslint/eslint/issues/5138
                    path.relative(process.cwd(), file)
                );
            });
            const report = cli.executeOnFiles(files);
            const format = cli.getFormatter(formatter);

            if (report.errorCount > 0 || report.warningCount > 0) {
                console.log(format(report.results));
            }

            if (report.errorCount > 0) {
                return reject();
            }

            if (report.errorCount === 0 && report.warningCount === 0) {
                log('¯\\_(ツ)_/¯');
            }

            // just resolve if there were no "hard" errors
            resolve(input);
        });
    };
};
