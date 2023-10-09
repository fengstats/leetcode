/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''

  // 找最短串长度
  let min = strs[0].length
  let str = strs[0]
  for (let i = 0; i < strs.length; i++) {
    const len = strs[i].length
    if (min > len) {
      min = len
      str = strs[i]
    }
  }

  // 根据最短串长度来截取数组元素比对，若出现不同向前移动一位继续匹配（删除一位字符），相同直接返回短串即可
  while (min > 0) {
    let isBreak = true
    for (let i = 0; i < strs.length; i++) {
      if (str !== strs[i].substring(0, min)) {
        isBreak = false
        break
      }
    }
    // 这里是用于手动退出最外层的 while 循环，代表内部最长公共前缀已经匹配出来了
    if (isBreak) break
    // 向前移动一位
    str = str.substring(0, --min)
  }

  return str
}
// @lc code=end
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
