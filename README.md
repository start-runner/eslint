[![npm](https://img.shields.io/npm/v/start-eslint.svg?style=flat-square)](https://www.npmjs.com/package/start-eslint)
[![travis](http://img.shields.io/travis/start-runner/eslint.svg?style=flat-square)](https://travis-ci.org/start-runner/eslint)
[![deps](https://img.shields.io/gemnasium/start-runner/eslint.svg?style=flat-square)](https://gemnasium.com/start-runner/eslint)

[ESLint](http://eslint.org/) plugin for [Start](https://github.com/start-runner/start)

## Install

```
npm i -D start-eslint
```

## Usage

```js
// tasks/index.js
export { eslint } from 'start-eslint';

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
