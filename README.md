[![npm](https://img.shields.io/npm/v/start-eslint.svg?style=flat-square)](https://www.npmjs.com/package/start-eslint)
[![travis](http://img.shields.io/travis/start-runner/start-eslint.svg?style=flat-square)](https://travis-ci.org/start-runner/start-eslint)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/start-eslint.svg?style=flat-square)](https://codecov.io/github/start-runner/start-eslint)
[![deps](https://img.shields.io/gemnasium/start-runner/start-eslint.svg?style=flat-square)](https://gemnasium.com/start-runner/start-eslint)

[ESLint](http://eslint.org/) plugin for [Start](https://github.com/start-runner/start)

## Install

```
npm i -S start-eslint
```

## Usage

In your `tasks/index.js` or any other location your run your tasks from:

```js
// as a separate task
export eslint from 'start-eslint';
```

```js
// run in a sequence with other tasks
export const test = [
  ...
  exports.eslint,
  ...
];
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks/",
  "eslint": "npm run task eslint",
}
```
