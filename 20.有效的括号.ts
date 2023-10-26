/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
// Map 对象 + 栈
function isValid(s: string): boolean {
  if (s.length <= 1) return false

  type BracketMap = { [index: string]: string }
  // 构建括号同类型映射表
  const map: BracketMap = { '(': ')', '{': '}', '[': ']' }
  // 通过数组模拟栈
  const stack: string[] = []

  for (let bracket of s) {
    // 匹配到左括号，入栈对应类型的右括号
    if (map.hasOwnProperty(bracket)) {
      stack.push(map[bracket])
      continue
    }
    // 匹配到右括号，出栈（最近一次入栈的右括号），与之进行对比
    // 一致，完成单次闭合，继续遍历
    // 不一致，说明在该右括号之前，未匹配到对应类型的左括号，为无效括号，直接退出
    if (stack.pop() !== bracket) return false
  }

  // 栈清空则表示完全匹配，不为空则存在无效括号
  return stack.length === 0
}
// @lc code=end
console.log(isValid('()'))
