'use strict'
// 課題5 アルゴリズム

const numbers = [20, 31, 42, 13, 5, 38]

// 合計
function sum(array) {
  return array.reduce((prev, current) => prev + current)
}

// 平均
function average(array) {
  return sum(array) / array.length
}

// 最大
function max(array) {
  return array.reduce((prev, current) => Math.max(prev, current))
}

// 最小
function min(array) {
  return array.reduce((prev, current) => Math.min(prev, current))
}

// バブルソート
function sortOfBubble(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[j - 1] > array[j]) {
        const tmp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = tmp
      }
    }
  }
}

// クイックソート
function sortOfQuick(array, left, right) {
  const lSave = left
  const rSave = right
  let pivot = array[left]
  while (left < right) {
    // 右側にpivotより小さな値を見つけるまで左方向へ移動
    while (pivot <= array[right] && left < right) {
      right--
    }
    if (left !== right) {
      // 左側にpivotより小さな値をコピー
      array[left] = array[right]
      left++
    }
    // 左側にpivotより大きな値を見つけるまで右方向へ移動
    while (pivot >= array[left] && left < right) {
      left++
    }
    if (left !== right) {
      // 右側にpivotより大きな値をコピー
      array[right] = array[left]
      right--
    }
  }
  // 左→右へと移動したカーソル位置にpivotを設定
  array[left] = pivot
  // pivotを設定したカーソル位置を区切り位置とする
  // pivotはもう移動しない
  pivot = left
  left = lSave
  right = rSave
  if (left < pivot) {
    sortOfQuick(array, left, pivot - 1)
  }
  if (right > pivot) {
    sortOfQuick(array, pivot + 1, right)
  }
}

// 出力
function output(sortName, array) {
  console.log('小さい順（' + sortName + '）：' + array.join(', '))
  // 逆順に並べ替え
  const reverse = new Array(array.length)
  for (let i = 0; i < array.length; i++) {
    reverse[array.length - i - 1] = array[i]
  }
  console.log('大きい順（' + sortName + '）：' + reverse.join(', '))
}

console.log('合計：' + sum(numbers))
console.log('平均：' + average(numbers))
console.log('最大値：' + max(numbers))
console.log('最小値：' + min(numbers))

// バブルソート
const bubble = numbers
sortOfBubble(bubble)
output('バブル', bubble)

// クイックソート
const quick = numbers
sortOfQuick(quick, 0, quick.length - 1)
output('クイック', quick)
