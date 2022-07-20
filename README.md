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

# erfcx

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Scaled [complementary error function][complementary-error-function].

<section class="intro">

The scaled [complementary error function][complementary-error-function] is defined as

<!-- <equation class="equation" label="eq:scaled_complementary_error_function" align="center" raw="\operatorname{erfcx}(x) = e^{x^2} \operatorname{erfc}(x)" alt="Scaled complementary error function."> -->

<!-- </equation> -->

For large values, the complementary error function is approximately equal to

<!-- <equation class="equation" label="eq:approximation-large-x" align="center" raw="\left( \frac{1}{\sqrt{\pi}} \right) \frac{1}{x}" alt="Approximation for large x"> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import erfcx from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfcx@esm/index.mjs';
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import erfcx from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfcx@esm/index.mjs';

var x = linspace( -30.0, 30.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, erfcx(x): %d', x[ i ], erfcx( x[ i ] ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-erfcx/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-erfcx/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-erfcx/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-erfcx/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-erfcx/main/LICENSE

[complementary-error-function]: https://en.wikipedia.org/wiki/Error_function

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
