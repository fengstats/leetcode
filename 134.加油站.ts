/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start

// TODO: 贪心

// 这个方案超时了，不过应该是可行的。
// 暴力：从加油站 0 到 0，1 到 1，n 到 n，一个个点来试，因为需要绕一圈，所以计算需要取余
// gas 是补给油量
// cost 是消耗油量
function canCompleteCircuit(gas: number[], cost: number[]): number {
  // 用于后续取余
  const n = gas.length
  for (let i = 0; i < n; ++i) {
    // 剩余油量
    let remain = gas[i]
    let j = i
    // 剩余油量是否能到下一站点，连下个站点到不了就换个起点
    while (remain - cost[j] >= 0) {
      // 加上补给减去消耗，看看剩余油量够不够去下一个点
      remain = remain + gas[(j + 1) % n] - cost[j]
      // 向下个点移动
      j = (j + 1) % n
      // 绕完一圈了
      if (i === j) return i
    }
  }

  // 走不完一圈
  return -1
}
// @lc code=end
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))
