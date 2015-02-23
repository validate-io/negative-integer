'use strict';

var isNegativeInteger = require( './../lib' );

console.log( isNegativeInteger( -5 ) );
// returns true

console.log( isNegativeInteger( 0 ) );
// returns false

console.log( isNegativeInteger( -Math.PI ) );
// returns false

console.log( isNegativeInteger( 5 ) );
// returns false
