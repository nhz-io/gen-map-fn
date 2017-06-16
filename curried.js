const genMapFn = require('./index')

function curriedGenMapFn(fn, ...args) {
    if (!fn) {
        return curriedGenMapFn
    }

    if (args.length) {
        return genMapFn(fn, ...args)
    }

    return function curriedGenMapFn(...args) {
        return args.length ? genMapFn(fn, ...args) : curriedGenMapFn
    }
}

module.exports = curriedGenMapFn
