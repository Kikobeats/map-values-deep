# map-values-deep

![Last version](https://img.shields.io/github/tag/Kikobeats/map-values-deep.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/Kikobeats/map-values-deep/master.svg?style=flat-square)](https://travis-ci.com/Kikobeats/map-values-deep)
[![NPM Status](https://img.shields.io/npm/dm/map-values-deep.svg?style=flat-square)](https://www.npmjs.org/package/@kikobeats/map-values-deep)

> Recursive lodash.mapKeys

## Install

```bash
$ npm install lodash map-values-deep --save
```

## Usage

```js
const mapValuesDeep = require('map-values-deep')

const square = (value, key) => value * value

mapValuesDeep({ two: 2, obj: { three: 3, four: 4 }, arr: [5, 6] }, square)
// => { two: 4, obj: { three: 9, four: 16 }, arr: [25, 36] }
```
## License

**map-values-deep** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/map-values-deep/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/map-values-deep/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
