function* genMapFn(fn, it, ...args) {
    it = it[Symbol.iterator]()

    let pass
    let result = it.next()

    if (args.length) {
        while (!result.done) {
            pass = yield fn(result.value, ...args)
            result = it.next(pass)
        }
    }
    else {
        while (!result.done) {
            pass = yield fn(result.value)
            result = it.next(pass)
        }
    }

    return result.value
}

module.exports = genMapFn
