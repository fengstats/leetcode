/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
// /[^a-zA-Z0-9]/g：^ 在这里是取反的意思
// 双指针：先通过正则去除非字母与数字的内容，然后将内容全部转换为小写
// 定义头尾指针同时向中间移动，一一匹配，一个对不上就不是回文字符串了
function isPalindrome(s: string): boolean {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase()
  let start = 0
  let end = str.length - 1
  while (start < end) {
    if (str[start] !== str[end]) return false
    start++
    end--
  }

  return true
}
// @lc code=end
