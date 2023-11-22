// 给定由「 a-z、A-Z、空格 」组成的一个字符串
// 要求：按字典序输出该字符串中出现的全部字母去重并转化为小写，并给出时间复杂度

// 示例
// 输入：'AdkbaA'
// 输出：'abdk

// 和 242.有效的字母异位词 解题思路差不多
// 利用数组模拟字母表存储，先将字符串全部转小写，遇到对应字母就让其码位值位置数值加一
// 为了让 a 字母在数组的起始位置，所以每个字母计算码位值时需要减去初始 a 的码位值（codePointAt）
function fromStr(str: string) {
  if (!str) return ''

  let ans = ''
  const table = new Array(26).fill(0)
  const aCodePoint = 'a'.codePointAt(0) ?? 0

  for (let char of str) table[(char.codePointAt(0) ?? 0) - aCodePoint]++

  // 按照顺序把字符串拼出来
  for (let i = 0; i < table.length; i++) {
    if (table[i] > 0) ans += String.fromCharCode(aCodePoint + i)
  }

  return ans
}

console.log(fromStr('AdkbaA'))
