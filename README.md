Negative Integer
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a negative integer.


## Installation

``` bash
$ npm install validate.io-negative-integer
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isNegativeInteger = require( 'validate.io-negative-integer' );
```

#### isNegativeInteger( value )

Validates if a `value` is a negative `integer`.

``` javascript
var value = -5;

var bool = isNegativeInteger( value );
// returns true
```


## Examples

``` javascript
var isNegativeInteger = require( 'validate.io-negative-integer' );

console.log( isNegativeInteger( -5 ) );
// returns true

console.log( isNegativeInteger( 0 ) );
// returns false

console.log( isNegativeInteger( -Math.PI ) );
// returns false

console.log( isNegativeInteger( 5 ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-negative-integer.svg
[npm-url]: https://npmjs.org/package/validate.io-negative-integer

[travis-image]: http://img.shields.io/travis/validate-io/negative-integer/master.svg
[travis-url]: https://travis-ci.org/validate-io/negative-integer

[coveralls-image]: https://img.shields.io/coveralls/validate-io/negative-integer/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/negative-integer?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/negative-integer.svg
[dependencies-url]: https://david-dm.org/validate-io/negative-integer

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/negative-integer.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/negative-integer

[github-issues-image]: http://img.shields.io/github/issues/validate-io/negative-integer.svg
[github-issues-url]: https://github.com/validate-io/negative-integer/issues
