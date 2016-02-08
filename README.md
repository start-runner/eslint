[![npm](https://img.shields.io/npm/v/start-eslint.svg?style=flat-square)](https://www.npmjs.com/package/start-eslint)
[![travis](http://img.shields.io/travis/start-runner/eslint.svg?style=flat-square)](https://travis-ci.org/start-runner/eslint)
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
import logger from 'start-simple-logger';
import files from 'start-files';
import eslint from 'start-eslint';

export function lint() {
    return start(logger())(
        files('**/*.js'),
        // `.eslintignore` is respected
        eslint()
    );
}
```

Task is rely on array of files, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`eslint(options, formatter)`

* `options` – [ESLint options](http://eslint.org/docs/developer-guide/nodejs-api.html#cliengine)
* `formatter` – [ESLint formatter](http://eslint.org/docs/developer-guide/nodejs-api.html#getformatter)
