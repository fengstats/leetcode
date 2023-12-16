// 字符串的右旋转操作是把字符串尾部的若干个字符转移到字符串的前面。
// 给定一个字符串 s 和一个正整数 k
// 请编写一个函数，将字符串中的后面 k 个字符移到字符串的前面，实现字符串的右旋转操作。

// 例如：
// 对于输入字符串 "123456" 和整数 2
// 函数应该将其转换为 "561234"

// 模拟
function rightRotateStr(s: string, k: number): string {
  const strLen = s.length
  // 通过两个相同 s 字符串拼接形成一个假环（对 k 做取余，两圈足以）
  const twoStr = s + s
  // 找到右旋下标起点
  let startIndex = strLen - (k % strLen)
  // 定位切割
  // NOTE: 注意 substring 包前不包后
  return twoStr.substring(startIndex, startIndex + strLen)
}

console.log(rightRotateStr('123456', 2))
console.log(rightRotateStr('123456', 8))
console.log(rightRotateStr('123456', 80))
