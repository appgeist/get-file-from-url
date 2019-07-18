# @appgeist/get-file-from-url

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]

Utility function to download a file from a specified URL. Returns a Promise that fulfills with the local file name upon download completion.

## Usage

```js
const getFileFromUrl = require("@appgeist/get-file-from-url");

const localFileName = await getFileFromUrl({
  url: "https://example.com/catz-picture.jpg",
  file: "/path/to/local-catz-picture.jpg"
});

console.log(localFileName); // -> "/path/to/local-catz-picture.jpg"
```

## License

The [ISC License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/@appgeist/get-file-from-url.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@appgeist/get-file-from-url
[license-image]: https://img.shields.io/npm/l/@appgeist/get-file-from-url.svg?style=flat-square
[license-url]: LICENSE
