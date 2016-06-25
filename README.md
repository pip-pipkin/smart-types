[![Build Status](https://travis-ci.org/jdpipkin/smart-types.svg?branch=master)](https://travis-ci.org/jdpipkin/smart-types)
[![Coverage Status](https://coveralls.io/repos/github/jdpipkin/smart-types/badge.svg?branch=master)](https://coveralls.io/github/jdpipkin/smart-types?branch=master)

# smart-types
A smarter type checker for Javascript. Smart types simplifies the tedious task of checking types in javascript.

## Usage

```js
smartTypes = require('smart-types');

smartTypes.isString('foo');
// => true

smartTypes.isNumber(10);
// => true

smartTypes.isNumber(NaN);
// => false

smartTypes.getType([]);
// => array

smartTypes.isOfType(new Error(), 'error');
// => true
```

## Motivation

This package is designed to simplify [[Class]] type checking in javascript.

## Installation

```bash
$ npm install -S start-types
```

## API Reference

API reference can be found at (https://jdpipkin.github.io/smart-types/docs/)[https://jdpipkin.github.io/smart-types/docs/]


## Tests
```bash
npm test
```

## Contributors

Contributions are always welcome. Please make sure your code follows the existing project style and there are no linting errors. Please test and document your changes before making your pull request.

If you don't feel like going through the hassel feel free to create an issue and I'll do my best to solve your problems.

## License

MIT
