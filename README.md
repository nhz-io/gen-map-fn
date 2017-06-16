# gen-map-fn

<p align="center">
  <a href="https://npmjs.org/package/gen-map-fn">
    <img src="https://img.shields.io/npm/v/gen-map-fn.svg?style=flat"
         alt="NPM Version">
  </a>
  
  <a href="https://travis-ci.org/nhz-io/gen-map-fn">
    <img src="https://img.shields.io/travis/nhz-io/gen-map-fn.svg?style=flat"
         alt="Travis Build">
  </a>

  <a href="https://coveralls.io/github/nhz-io/gen-map-fn">
    <img src="https://img.shields.io/coveralls/nhz-io/gen-map-fn.svg?style=flat"
         alt="Coveralls">
  </a>

  <a href="https://www.bithound.io/github/nhz-io/gen-map-fn">
    <img src="https://img.shields.io/bithound/code/github/nhz-io/gen-map-fn.svg?style=flat"
         alt="Bithound Status">
  </a>

  <a href="https://github.com/nhz-io/gen-map-fn/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/nhz-io/gen-map-fn.svg?style=flat"
         alt="License">
  </a>
</p>
<p align="center">
    <h3 align="center">Map function over iterator capturing the iterator return value</h3>
</p>

## Install
```sh
npm i -S gen-map-fn
```

## Signatures
```hs
genMapFn :: (Function fn, Iterator it) => (fn, it, ...args) -> it
```
```hs
curriedGenMapFn :: (Function fn, Iterator it) => fn -> (it, ...args) -> it
```

## Use case

* You are within a generator function
* You have a source iterator that you are pulling the values from
* You want to transform those values
* You need the return value of the source iterator
* You want to minimize boilerplate and just use: `result = yield* iterator`

## Usage Example

> For curried version use: `const curriedGenMapFn = require('gen-map-fn/curried')`

```js
const genMapFn = require('gen-map-fn')

function* it() {
    yield* [1, 2, 3]

    return 'ok'
}

const mul = (v, m) => v * m

function* gen(it, m) {
    it = genMapFn(mul, it, m)

    console.log('Done:', yield* it)
}

console.log('Multiplying [1, 2, 3] by 5')
console.log('Result:', [...gen(it(), 5)])
```



## Dev
```sh
git clone https://github.com/nhz-io/gen-map-fn
cd gen-map-fn
npm i
npm start
```

## License [MIT](LICENSE)

## Version 1.0.0
