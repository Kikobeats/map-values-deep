const test = require('ava')

const map = require('..')

const square = (value, key) => value * value
const keyPlusValue = (value, key) => key + value

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

test('passes object key to mapper function', t => {
  t.deepEqual(
    map({ key1: 'foo', key2: 'bar' }, keyPlusValue),
    { key1: 'key1foo', key2: 'key2bar' }
  )
})

test('passes array key (index) to mapper function', t => {
  t.deepEqual(
    map([0, 2, 4], keyPlusValue),
    [0, 3, 6]
  )
})

test('Do nothing on non plain objects', t => {
  const now = new Date()
  t.deepEqual(map(now, square), now)
})
