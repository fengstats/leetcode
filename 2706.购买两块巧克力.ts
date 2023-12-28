/*
 * @lc app=leetcode.cn id=2706 lang=typescript
 *
 * [2706] 购买两块巧克力
 */

// @lc code=start

// 排序
function buyChoco(prices: number[], money: number): number {
  // 数组原地升序排列（从小到大）
  prices.sort((a, b) => a - b)

  // 取出两个最低价格的巧克力的花费
  const minSpend = prices[0] + prices[1]

  // 如果最低花费超过你的拥有的钱，那就不买啦！
  if (minSpend > money) {
    return money
  }

  // 没超过那就看看买完还剩多少
  return money - minSpend
}
// @lc code=end
