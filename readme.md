# start-eslint

[![npm](https://img.shields.io/npm/v/start-eslint.svg?style=flat-square)](https://www.npmjs.com/package/start-eslint)
[![linux build](https://img.shields.io/travis/start-runner/eslint.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/eslint)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/eslint.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/eslint)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/eslint.svg?style=flat-square)](https://codecov.io/github/start-runner/eslint)
[![deps](https://img.shields.io/gemnasium/start-runner/eslint.svg?style=flat-square)](https://gemnasium.com/start-runner/eslint)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

[ESLint](http://eslint.org/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-eslint
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import eslint from 'start-eslint';

export function lint() {
    return start(reporter())(
        files('**/*.js'),
        // `.eslintignore` is respected
        eslint()
    );
}
```

This task relies on array of files and provides the same, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`eslint(options, formatter)`

* `options` – [ESLint options](http://eslint.org/docs/developer-guide/nodejs-api.html#cliengine)
* `formatter` – [ESLint formatter](http://eslint.org/docs/developer-guide/nodejs-api.html#getformatter)
