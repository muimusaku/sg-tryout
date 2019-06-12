'use strict'
// 課題7 Hit&Blow

// 10進数
const DECIMAL = 10
// 数値の最大値
const MAX_NUMBER = 9
// 桁数
const DIGIT = 4

// 正解作成
function createCorrect() {
  const set = new Set()
  while (set.size !== DIGIT) {
    set.add(Math.round(Math.random() * MAX_NUMBER))
  }
  return Array.from(set)
}

// 正解
const correct = createCorrect()

// 正の整数を判定する
function isPositiveInteger(value) {
  return !(isNaN(value) || Math.sign(value) < 1 || value.indexOf('.') !== -1)
}

// 桁数の範囲で取りうる最大値を求める（4桁の場合、9999）
function calcMaxValue() {
  return parseInt(Array(DIGIT + 1).join(MAX_NUMBER), DECIMAL)
}

// パラメータの入力チェックを行う
function checkParameter(value) {
  if (!isPositiveInteger(value)) {
    // 正の整数でない場合はfalse
    return false
  }
  const number = parseInt(value, DECIMAL)
  if (number < 0 || number > calcMaxValue()) {
    // 0-最大値の中にない場合はfalse
    return false
  }
  // 重複チェック
  if (new Set(value).size !== DIGIT) {
    // 重複あり
    return false
  }
  return true
}

// Hit数とBlow数を判定する
function judgeHitAndBlow(answer) {
  let hit = 0
  let blow = 0
  answer.forEach((v, i) => {
    const index = correct.indexOf(parseInt(v, DECIMAL))
    if (i === index) {
      hit++
    } else if (index > -1) {
      blow++
    }
  })
  return { hit: hit, blow: blow }
}

let count = 0

function process() {
  const message = DIGIT + '桁の数字は？'
  console.log(message)
  const answer = window.prompt(message)
  if (!checkParameter(answer)) {
    console.log('不正な値が入力されました。 ' + answer)
    return false
  }
  console.log(answer)
  count++

  const result = judgeHitAndBlow(Array.from(answer))
  if (result.hit === DIGIT) {
    console.log(count + '回で正解！')
    return false
  } else {
    console.log('外れ： ' + result.hit + 'Hits, ' + result.blow + 'Blow')
    return true
  }
}

let result = true
while (result) {
  result = process()
}
