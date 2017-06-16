import test from 'ava'

import genMapFn from '.'
import curriedGenMapFn from './curried'

test('exports', t => {
    t.is(typeof genMapFn, 'function')
    t.is(typeof curriedGenMapFn, 'function')
})

test('mapping with args', t => {
    const mul = (value, by) => value * by
    const test = [1, 2, 3]
    const pass = [3, 6, 9]

    t.deepEqual([...genMapFn(mul, test, 3)], pass)

    t.deepEqual([...curriedGenMapFn()()(mul)()(test, 3)], pass)
    t.deepEqual([...curriedGenMapFn()(mul)()(test, 3)], pass)
    t.deepEqual([...curriedGenMapFn(mul)()(test, 3)], pass)
    t.deepEqual([...curriedGenMapFn(mul, test, 3)], pass)
})

test('mapping without args', t => {
    const sq = value => value*value
    const test = [1, 2, 3]
    const pass = [1, 4, 9]

    t.deepEqual([...genMapFn(sq, test)], pass)

    t.deepEqual([...curriedGenMapFn()()(sq)()(test)], pass)
    t.deepEqual([...curriedGenMapFn()(sq)()(test)], pass)
    t.deepEqual([...curriedGenMapFn(sq)()(test)], pass)
    t.deepEqual([...curriedGenMapFn(sq, test)], pass)
})

test('iterator result', t => {
    let test
    const pass = 'pass'
    const id = i => i

    function* it() {
        return pass
    }

    function* result(it) {
        yield yield* it
    }

    test = result(genMapFn(id, it()))
    t.deepEqual([...test], [pass])


    test = result(curriedGenMapFn()()(id)()(it()))
    t.deepEqual([...test], [pass])

    test = result(curriedGenMapFn()(id)()(it()))
    t.deepEqual([...test], [pass])

    test = result(curriedGenMapFn(id)()(it()))
    t.deepEqual([...test], [pass])


    test = result(curriedGenMapFn(id, it()))
    t.deepEqual([...test], [pass])
})
