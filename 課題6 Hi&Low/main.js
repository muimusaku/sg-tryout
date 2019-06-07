'use strict'
// 課題6 Hi&Low

// 正解
const correct = Math.round(Math.random() * 100)

// パラメータの入力チェックを行う
function checkParameter(value) {
  if (isNaN(value) || Math.sign(value) < 1 || value.indexOf('.') !== -1) {
    // 正の整数でない場合はfalse
    return false
  }
  if (value < 0 || value > 100) {
    // 0-100の中にない場合はfalse
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
    // 0-100の範囲内でない場合は処理中断
    console.log('不正な値が入力されました。 ' + answer)
    return 0
  }
  count++
  console.log(answer)
  return correct - answer
}

let message = '0-100で数字を当てて'
let result = 1
while (result !== 0) {
  result = inputAnswer(message)
  if (result === 0) {
    console.log('正解！・・・' + count + '回目であてました')
  } else {
    message = result > 0 ? 'もっと上' : 'もっと下'
  }
}
