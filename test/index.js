const test = require('ava')

const map = require('..')

const square = (value, key) => value * value

test('transforms simple object', t => {
  t.deepEqual(map({ two: 2, three: 3 }, square), { two: 4, three: 9 })
})

test('transforms simple array', t => {
  t.deepEqual(map([2, 3], square), [4, 9])
})

test('transforms object with nested objects/arrays', t => {
  t.deepEqual(
    map({ two: 2, obj: { three: 3, four: 4 }, arr: [5, 6] }, square),
    { two: 4, obj: { three: 9, four: 16 }, arr: [25, 36] }
  )
})

test('transforms array with nested objects/arrays', t => {
  t.deepEqual(map([2, { three: 3, four: 4 }, [5, 6]], square), [
    4,
    { three: 9, four: 16 },
    [25, 36]
  ])
})
