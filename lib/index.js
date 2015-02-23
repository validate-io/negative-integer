/**
*
*	VALIDATE: negative-integer
*
*
*	DESCRIPTION:
*		- Validates if a value is a negative integer.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isInteger = require( 'validate.io-integer' );


// IS NEGATIVE INTEGER //

/**
* FUNCTION: isNegativeInteger( value )
*	Validates if a value is a negative integer.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a negative integer
*/
function isNegativeInteger( value ) {
	return isInteger( value ) && value < 0;
} // end FUNCTION isNegativeInteger()


// EXPORTS //

module.exports = isNegativeInteger;
