[![npm](https://img.shields.io/npm/v/start-eslint.svg?style=flat-square)](https://www.npmjs.com/package/start-eslint)
[![travis](http://img.shields.io/travis/start-runner/eslint.svg?style=flat-square)](https://travis-ci.org/start-runner/eslint)
[![deps](https://img.shields.io/gemnasium/start-runner/eslint.svg?style=flat-square)](https://gemnasium.com/start-runner/eslint)

[ESLint](http://eslint.org/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-eslint
```

## Usage

Task is rely on array of files.

```js
// tasks/index.js
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

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks/",
  "lint": "npm run task lint"
}
```

## Arguments

`eslint(options, formatter)`

* `options` – [ESLint options](http://eslint.org/docs/developer-guide/nodejs-api.html#cliengine)
* `formatter` – [ESLint formatter](http://eslint.org/docs/developer-guide/nodejs-api.html#getformatter)
