/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 */

// @lc code=start

// 两个 s 字符串拼接之后如果包含 goal 就说明旋转若干次后 s 能变成 goal
function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false

  return (s + s).includes(goal)
}
// @lc code=end
