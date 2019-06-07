'use strict'
// 課題7 Hit&Blow

// 正解作成
function createCorrect() {
  const set = new Set()
  while (4 !== set.size) {
    let number = Math.round(Math.random() * 9)
    set.add(number)
  }
  return Array.from(set)
}

// 正解
const correct = createCorrect()

// パラメータの入力チェックを行う
function checkParameter(value) {
  if (isNaN(value) || Math.sign(value) < 1 || value.indexOf('.') !== -1) {
    // 正の整数でない場合はfalse
    return false
  }
  if (value < 0 || value > 9999) {
    // 0-9999の中にない場合はfalse
    return false
  }
  // 重複チェック
  const set = new Set(value)
  if (4 !== set.size) {
    // 重複あり
    return false
  }
  return true
}

// 一致確認を行う
function checkMatch(answer) {
  let hit = 0
  let blow = 0
  answer.forEach((v, i) => {
    const index = correct.indexOf(parseInt(v))
    if (i === index) {
      hit++
    } else if (-1 < index) {
      blow++
    }
  })
  if (4 === hit) {
    console.log(count + '回で正解！')
    return false
  } else {
    console.log('外れ： ' + hit + 'Hits, ' + blow + 'Blow')
    return true
  }
}

let count = 0

function process() {
  console.log("4桁の数字は？")
  let answer = window.prompt("4桁の数字は？")
  if (!checkParameter(answer)) {
    // 0-100の範囲内でない場合は処理中断
    console.log('不正な値が入力されました。 ' + answer)
    return false
  }
  console.log(answer)
  count++
  return checkMatch(Array.from(answer))
}

let result = true
while (result) {
  result = process()
}
