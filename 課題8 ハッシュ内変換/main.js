'use strict'
// 課題8 ハッシュ内変換

function toUry(hash) {
  const json = JSON.parse(hash, (k, v) => {
    if (k === 'text') {
      return v.replace('foo', 'uryyyy!!')
    }
    return v
  })
  return JSON.stringify(json, null, 2)
}

const hash =
  '{ ' +
  '"main": { ' +
  '"first": { "text": "foobar" }, ' +
  '"second": { "text": "fizzbuzz", "child": { "text": "foobar" } } ' +
  '}, ' +
  '"sub": { ' +
  '"first": { "text": "fizzbuzz", "child": { "text": "foobar" } }, ' +
  '"second": { ' +
  '"third": { "text": "barfoo", "child": { "text": "foobar" } }, ' +
  '"forth": { "child": { "text": "jit_foo_foo" } } ' +
  '} ' +
  '}, ' +
  '"text": "foofava" ' +
  '}'

console.log(toUry(hash))
