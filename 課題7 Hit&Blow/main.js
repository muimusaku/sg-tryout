'use strict'
// 課題7 Hit&Blow

// 桁数
const DIGIT = 4

// 正解作成
function createCorrect() {
  const set = new Set()
  while (set.size !== DIGIT) {
    set.add(Math.round(Math.random() * 9))
  }
  return Array.from(set)
}

// 正解
const correct = createCorrect()

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
  if (value.length !== DIGIT) {
    // 4桁の数値でない場合はfalse
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
    const index = correct.indexOf(parseInt(v, 10))
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
