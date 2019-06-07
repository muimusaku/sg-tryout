'use strict'
// 課題1 FizzBuzz

// FizzBuzz計算
function calcFizzBuzz(number) {
  let result = ''
  if (number % 3 === 0) {
    result = 'Fizz'
  }
  if (number % 5 === 0) {
    result += 'Buzz'
  }
  if (result === '') {
    result = number
  }
  return result
}

const text = window.prompt('正の整数を入力してください。')
if (isNaN(text) || Math.sign(text) < 1 || text.indexOf('.') !== -1) {
  // 正の整数でない場合は処理中断
  console.log('不正な値が入力されました。 ' + text)
} else {
  // Array.fromで 0 ～ 入力値 - 1 までの配列が作成される
  const array = Array.from({ length: text }, (v, k) => {
    return calcFizzBuzz(k + 1)
  })
  console.log(array.join(', '))
}
