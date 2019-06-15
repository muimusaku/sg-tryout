'use strict'
// 課題1 FizzBuzz

// 正の整数を判定する
function isPositiveInteger(text) {
  return !(isNaN(text) || Math.sign(text) < 1 || text.indexOf('.') !== -1)
}

// FizzBuzz計算
function calcFizzBuzz(number) {
  return (number % 3 === 0 ? 'Fizz' : '') + (number % 5 === 0 ? 'Buzz' : '') || number
}

const text = window.prompt('正の整数を入力してください。')
if (!isPositiveInteger(text)) {
  // 正の整数でない場合は処理中断
  console.log('不正な値が入力されました。 ' + text)
} else {
  // Array.fromで 0 ～ 入力値 - 1 までの配列が作成される
  const array = Array.from({ length: text }, (v, k) => calcFizzBuzz(k + 1))
  console.log(array.join(', '))
}
