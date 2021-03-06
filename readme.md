# then-tmp 

Promised version of the node.js [tmp](https://www.npmjs.com/package/tmp) module.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install then-tmp --save
```

## Usage

```js
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import tmp from 'then-tmp';

tmp.file().then(({path, fd, cleanupCallback}) => {
});

tmp.dir().then(({path, cleanupCallback}) => {
});

tmp.tmpName().then(path => {
});

// *Sync-methods are aliases to the tmp module
const {name: fileName} = tmp.fileSync();
const {name: dirName} = tmp.dirSync();
const tmpName = tmp.tmpNameSync();

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [promisify-function](https://github.com/jcollado/promisify-function): Turn a callback-style function into a function that returns a promise
- [tmp](https://github.com/raszi/node-tmp): Temporary file and directory creator

## Dev Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-plugin-syntax-async-functions](https://github.com/babel/babel/tree/master/packages): Allow parsing of async functions
- [babel-plugin-transform-async-to-generator](https://github.com/babel/babel/tree/master/packages): Turn async functions into ES2015 generators
- [babel-preset-es2015-node4](https://github.com/jbach/babel-preset-es2015-node4): Babel preset to make node@4 ES2015 compatible.
- [babel-tape-runner](https://github.com/wavded/babel-tape-runner): Babel + Tape for running your ES Next tests
- [package-json-to-readme](https://github.com/zeke/package-json-to-readme): Generate a README.md from package.json contents
- [tapava](https://github.com/kesla/tapava): the syntax of ava, run through tape
- [then-fs](https://github.com/then/fs): promised FS
- [xo](https://github.com/sindresorhus/xo): JavaScript happiness style linter ❤️


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
