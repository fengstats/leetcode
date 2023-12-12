/*
 * @lc app=leetcode.cn id=1523 lang=typescript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start

// 数学
// 都是偶数：如 [0,10] (10-0)/2=5
// 都是奇数：如 [1,11] (11-1)/2=5，此时发现不对，答案应该是 6，故此 +1
// 一奇一偶：如 [1,10] (10-1)/2=4.5 向下取整后为 4，不对答案应该是 5，故此 +1
// 通过举例发现规律，偶数情况下正常计算，存在奇数 +1 即可
function countOdds(low: number, high: number): number {
  let count = Math.floor((high - low) / 2)
  if (high % 2 === 1 || low % 2 === 1) count++
  return count
}
// @lc code=end
