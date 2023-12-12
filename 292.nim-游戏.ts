/*
 * @lc app=leetcode.cn id=292 lang=typescript
 *
 * [292] Nim 游戏
 */

// @lc code=start

// 巴什博弈：想要先手必胜，必须要满足 n 不能整除 max+min 也就是 3+1=4
// 先把多余的石头拿掉，形成 n 可以整除 4 的情况，此时先手必胜
// 为什么是 4 呢？因为最少拿 1 块，最多拿 3 块
// 如果 n 可以整除 4 时，此时后手必胜：
// 我拿 1 对方可以拿 3
// 我拿 2 对方可以拿 2
// 我拿 3 对方可以拿 4
function canWinNim(n: number): boolean {
  return n % 4 !== 0
}
// @lc code=end
