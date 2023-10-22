/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
// 思路：维护一个最小买入值，默认为 prices[0]
// 每天思考一下，假设我是从最低点买入，在今天卖出股票，能赚多少钱？
// 最小买入值随着更低的股票价格更新，最后看看哪天赚的钱最多，这就是最大利润
function maxProfit(prices: number[]): number {
  let ans = 0
  let minPrice = prices[0]

  for (let price of prices) {
    const profit = price - minPrice
    // 取最大利润
    ans = Math.max(ans, profit)
    // 取最小买入值
    minPrice = Math.min(minPrice, price)
  }

  return ans
}
// @lc code=end
