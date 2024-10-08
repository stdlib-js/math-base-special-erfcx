/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [SciPy]{@link https://github.com/scipy/scipy/blob/ed14bf0a66440a4d164581499fda662121963a56/scipy/special/Faddeeva.cc}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2012 Massachusetts Institute of Technology
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* ```
*/

'use strict';

// MODULES //

var exp = require( '@stdlib/math-base-special-exp' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var erfcxY100 = require( './erfcx_y100.js' );


// VARIABLES //

var INV_SQRT_PI = 0.56418958354775628694807945156; // 1 / sqrt(pi)


// MAIN //

/**
* Evaluates the scaled complementary error function.
*
* ```tex
* \operatorname{erfcx}(x) = \exp{x^2} \cdot \operatorname{erfc}(x)
* ```
*
* ## Notes
*
* -   Use this function to replace expressions containing `exp{x^2} erfc(x)` in order to avoid errors due to underflow or overflow.
* -   For expressions of the form `\exp{-x^2} erfcx(x)`, use the complementary error function `erfc(x)` instead, as this substitution maintains accuracy by avoiding roundoff errors for large values of `x`.
*
* @param {number} x - input value
* @returns {number} evaluated scaled complementary error function
*
* @example
* var y = erfcx( 0.0 );
* // returns 1.0
*
* @example
* var y = erfcx( 1.0 );
* // returns ~0.4276
*
* @example
* var y = erfcx( -1.0 );
* // returns ~5.01
*
* @example
* var y = erfcx( 50.0 );
* // returns ~0.011
*
* @example
* var y = erfcx( -50.0 );
* // returns +Infinity
*
* @example
* var y = erfcx( NaN );
* // returns NaN
*/
function erfcx( x ) {
	var x2;

	if ( isnan( x ) ) {
		return x;
	}
	if ( x >= 0.0 ) {
		if ( x > 50.0 ) { // continued-fraction expansion is faster
			if ( x > 5.0e7 ) { // 1-term expansion, important to avoid overflow
				return INV_SQRT_PI / x;
			}
			x2 = x * x;

			// 5-term expansion (rely on compiler for CSE), simplified from: INV_SQRT_PI / (x+0.5/(x+1/(x+1.5/(x+2/x))))
			return INV_SQRT_PI * ( ( x2 * (x2+4.5) ) + 2.0 ) / ( x * ( ( x2*(x2+5.0) ) + 3.75 ) ); // eslint-disable-line max-len
		}
		return erfcxY100( 400.0/(4.0+x) );
	}
	if ( x < -26.7 ) {
		return PINF;
	}
	x2 = x * x;
	if ( x < -6.1 ) {
		return 2.0 * exp( x2 );
	}
	return ( 2.0*exp( x2 ) ) - erfcxY100( 400.0/(4.0-x) );
}


// EXPORTS //

module.exports = erfcx;
