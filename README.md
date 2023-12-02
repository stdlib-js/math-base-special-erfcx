<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# erfcx

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Scaled [complementary error function][complementary-error-function].

<section class="intro">

The scaled [complementary error function][complementary-error-function] is defined as

<!-- <equation class="equation" label="eq:scaled_complementary_error_function" align="center" raw="\operatorname{erfcx}(x) = e^{x^2} \operatorname{erfc}(x)" alt="Scaled complementary error function."> -->

```math
\mathop{\mathrm{erfcx}}(x) = e^{x^2} \mathop{\mathrm{erfc}}(x)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{erfcx}(x) = e^{x^2} \operatorname{erfc}(x)" data-equation="eq:scaled_complementary_error_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d97f372ed0bdcad1d7d373fad56a663ec94abe9e/lib/node_modules/@stdlib/math/base/special/erfcx/docs/img/equation_scaled_complementary_error_function.svg" alt="Scaled complementary error function.">
    <br>
</div> -->

<!-- </equation> -->

For large values, the scaled [complementary error function][complementary-error-function] is approximately equal to

<!-- <equation class="equation" label="eq:scaled_complementary_error_function_approximation_large_x" align="center" raw="\left( \frac{1}{\sqrt{\pi}} \right) \frac{1}{x}" alt="Approximation for large x"> -->

```math
\left( \frac{1}{\sqrt{\pi}} \right) \frac{1}{x}
```

<!-- <div class="equation" align="center" data-raw-text="\left( \frac{1}{\sqrt{\pi}} \right) \frac{1}{x}" data-equation="eq:scaled_complementary_error_function_approximation_large_x">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ab78b6493866fa172404de2b5d087f050d7c8807/lib/node_modules/@stdlib/math/base/special/erfcx/docs/img/equation_scaled_complementary_error_function_approximation_large_x.svg" alt="Approximation for large x">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import erfcx from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfcx@deno/mod.js';
```

#### erfcx( x )

Evaluates the scaled [complementary error function][complementary-error-function].

```javascript
var y = erfcx( 0.0 );
// returns 1.0

y = erfcx( 1.0 );
// returns ~0.4276

y = erfcx( -1.0 );
// returns ~5.01

y = erfcx( 50.0 );
// returns ~0.011

y = erfcx( -50.0 );
// returns +Infinity
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erfcx( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@deno/mod.js';
import erfcx from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfcx@deno/mod.js';

var x = linspace( -30.0, 30.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, erfcx(x): %d', x[ i ], erfcx( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/erfc`][@stdlib/math/base/special/erfc]</span><span class="delimiter">: </span><span class="description">complementary error function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/erfcinv`][@stdlib/math/base/special/erfcinv]</span><span class="delimiter">: </span><span class="description">inverse complementary error function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/erf`][@stdlib/math/base/special/erf]</span><span class="delimiter">: </span><span class="description">error function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/erfinv`][@stdlib/math/base/special/erfinv]</span><span class="delimiter">: </span><span class="description">inverse error function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-erfcx.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-erfcx

[test-image]: https://github.com/stdlib-js/math-base-special-erfcx/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-erfcx/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-erfcx/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-erfcx?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-erfcx.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-erfcx/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-erfcx/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-erfcx/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-erfcx/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-erfcx/blob/main/branches.md

[complementary-error-function]: https://en.wikipedia.org/wiki/Error_function

<!-- <related-links> -->

[@stdlib/math/base/special/erfc]: https://github.com/stdlib-js/math-base-special-erfc/tree/deno

[@stdlib/math/base/special/erfcinv]: https://github.com/stdlib-js/math-base-special-erfcinv/tree/deno

[@stdlib/math/base/special/erf]: https://github.com/stdlib-js/math-base-special-erf/tree/deno

[@stdlib/math/base/special/erfinv]: https://github.com/stdlib-js/math-base-special-erfinv/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
