[![npm](https://img.shields.io/npm/v/start-eslint.svg?style=flat-square)](https://www.npmjs.com/package/start-eslint)
[![travis](http://img.shields.io/travis/start-runner/eslint.svg?style=flat-square)](https://travis-ci.org/start-runner/eslint)
[![deps](https://img.shields.io/gemnasium/start-runner/eslint.svg?style=flat-square)](https://gemnasium.com/start-runner/eslint)

[ESLint](http://eslint.org/) runner for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-eslint
```

## Usage

```js
// tasks/index.js
import start from 'start';
import logger from 'start-simple-logger';
import eslint from 'start-eslint';

export function test() {
    return start(logger)(
        ...
        eslint(),
        ...
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks/",
  "test": "npm run task test"
}
```

## Arguments

`eslint(files, options, formatter)`

* `files` – files to execute ESLint on, see [`executeOnFiles()`](http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles) (`[ '.' ]` by default)
* `options` – ESLint options, see [CLIEngine options](http://eslint.org/docs/developer-guide/nodejs-api.html#cliengine)
* `formatter` – output formatter, see [`getFormatter()`](http://eslint.org/docs/developer-guide/nodejs-api.html#getformatter)
