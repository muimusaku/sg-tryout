'use strict'
// 課題4 再帰

// 再帰加算
function recursive(total, add) {
  const result = total + add
  return add === 1 ? result : recursive(result, --add)
}

const text = window.prompt('正の整数を入力してください。')
if (isNaN(text) || Math.sign(text) < 1 || text.indexOf('.') !== -1) {
  // 正の整数でない場合は処理中断
  console.log('不正な値が入力されました。 ' + text)
} else {
  console.log('入力：' + text)
  console.log('出力：' + recursive(0, parseInt(text)))
}
