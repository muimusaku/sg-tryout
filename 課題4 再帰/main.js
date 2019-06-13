'use strict'
// 課題4 再帰

// 正の整数を判定する
function isPositiveInteger(text) {
  return !(isNaN(text) || Math.sign(text) < 1 || text.indexOf('.') !== -1)
}

// 再帰加算
function recursive(number) {
  return number === 1 ? 1 : number + recursive(--number)
}

const text = window.prompt('正の整数を入力してください。')
if (!isPositiveInteger(text)) {
  // 正の整数でない場合は処理中断
  console.log('不正な値が入力されました。 ' + text)
} else {
  console.log('入力：' + text)
  console.log('出力：' + recursive(parseInt(text, 10)))
}
