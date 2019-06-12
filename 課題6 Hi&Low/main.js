'use strict'
// 課題6 Hi&Low

// 最大値
const MAX_NUMBER = 100

// 正解
const correct = Math.round(Math.random() * MAX_NUMBER)

// 正の整数を判定する
function isPositiveInteger(value) {
  return !(isNaN(value) || Math.sign(value) < 1 || value.indexOf('.') !== -1)
}

// パラメータの入力チェックを行う
function checkParameter(value) {
  if (!isPositiveInteger(value)) {
    // 正の整数でない場合はfalse
    return false
  }
  const number = parseInt(value, 10)
  if (number < 0 || number > MAX_NUMBER) {
    // 0-最大値の中にない場合はfalse
    return false
  }
  return true
}

let count = 0

// 回答入力
function inputAnswer(message) {
  console.log(message)
  const answer = window.prompt(message)
  if (!checkParameter(answer)) {
    console.log('不正な値が入力されました。 ' + answer)
    return 0
  }
  count++
  console.log(answer)
  return correct - answer
}

let message = '0-' + MAX_NUMBER + 'で数字を当てて'
let result = 1
while (result !== 0) {
  result = inputAnswer(message)
  if (result === 0) {
    console.log('正解！・・・' + count + '回目であてました')
  } else {
    message = result > 0 ? 'もっと上' : 'もっと下'
  }
}
