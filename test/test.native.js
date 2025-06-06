/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var mediumPositive = require( './fixtures/medium_positive.json' );
var smallPositive = require( './fixtures/small_positive.json' );
var smallNegative = require( './fixtures/small_negative.json' );
var mediumNegative = require( './fixtures/medium_negative.json' );
var largePositive = require( './fixtures/large_positive.json' );
var tiny = require( './fixtures/tiny.json' );


// VARIABLES //

var INV_SQRT_PI = 0.56418958354775628694807945156; // 1 / sqrt(pi)
var erfcx = tryRequire( resolve(__dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( erfcx instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof erfcx, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var y;

	y = erfcx( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `Infinity` if `x` is smaller than `-26.7`', opts, function test( t ) {
	var y;

	y = erfcx( -26.7 );
	t.strictEqual( y, PINF, 'returns expected value' );

	y = erfcx( -30.0 );
	t.strictEqual( y, PINF, 'returns expected value' );

	y = erfcx( -35.0 );
	t.strictEqual( y, PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns `( 1 / sqrt(pi) ) / x` if `x` is larger than `5e7`', opts, function test( t ) {
	var y;
	var x;

	x = 5.0e8;
	y = erfcx( x );
	t.strictEqual( y, INV_SQRT_PI / x, 'returns expected value' );

	x = 5.0e9;
	y = erfcx( x );
	t.strictEqual( y, INV_SQRT_PI / x, 'returns expected value' );

	x = 5.0e15;
	y = erfcx( x );
	t.strictEqual( y, INV_SQRT_PI / x, 'returns expected value' );

	t.end();
});

tape( 'the function computes the scaled complementary error function for positive medium numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = mediumPositive.expected;
	x = mediumPositive.x;
	for ( i = 0; i < expected.length; i++ ) {
		y = erfcx( x[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'returns '+y+' when provided '+x[i]+'.' );
		} else {
			delta = abs( expected[ i ] - y );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+y+' when provided '+x[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the scaled complementary error function for positive small numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smallPositive.expected;
	x = smallPositive.x;
	for ( i = 0; i < expected.length; i++ ) {
		y = erfcx( x[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'returns '+y+' when provided '+x[i]+'.' );
		} else {
			delta = abs( expected[ i ] - y );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+y+' when provided '+x[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the scaled complementary error function for negative small numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smallNegative.expected;
	x = smallNegative.x;
	for ( i = 0; i < expected.length; i++ ) {
		y = erfcx( x[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'returns '+y+' when provided '+x[i]+'.' );
		} else {
			delta = abs( expected[ i ] - y );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+y+' when provided '+x[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the scaled complementary error function for negative medium numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = mediumNegative.expected;
	x = mediumNegative.x;
	for ( i = 0; i < expected.length; i++ ) {
		y = erfcx( x[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'returns '+y+' when provided '+x[i]+'.' );
		} else {
			delta = abs( expected[ i ] - y );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+y+' when provided '+x[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the scaled complementary error function for positive large numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = largePositive.expected;
	x = largePositive.x;
	for ( i = 0; i < expected.length; i++ ) {
		y = erfcx( x[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'returns '+y+' when provided '+x[i]+'.' );
		} else {
			delta = abs( expected[ i ] - y );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+y+' when provided '+x[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the scaled complementary error function for tiny numbers', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = tiny.expected;
	x = tiny.x;
	for ( i = 0; i < expected.length; i++ ) {
		y = erfcx( x[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'returns '+y+' when provided '+x[i]+'.' );
		} else {
			delta = abs( expected[ i ] - y );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. returns '+y+' when provided '+x[i]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: ' +tol+'.' );
		}
	}
	t.end();
});
