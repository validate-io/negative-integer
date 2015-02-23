/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isNegativeInteger = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-negative-integer', function tests() {

	it( 'should export a function', function test() {
		expect( isNegativeInteger ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isNegativeInteger( -5 );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			0,
			Number.POSITIVE_INFINITY,
			Number.NEGATIVE_INFINITY,
			-Math.PI,
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isNegativeInteger( value );
		}
	});


});
