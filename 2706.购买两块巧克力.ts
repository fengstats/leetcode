/*
 * @lc app=leetcode.cn id=2706 lang=typescript
 *
 * [2706] 购买两块巧克力
 */

// @lc code=start

// 一次遍历
function buyChoco(prices: number[], money: number): number {
  // 维护两个变量，一个是最低价格、一个是次最低价格
  let minPrice = Math.min(prices[0], prices[1])
  let nextMinPrice = Math.max(prices[0], prices[1])

  for (let i = 2; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      // 优先比较最小值更新
      // 比最小值小，那么原来的最小值就是次之了
      nextMinPrice = minPrice
      minPrice = prices[i]
    } else if (nextMinPrice > prices[i]) {
      // 只比次最小值小，直接更新即可
      nextMinPrice = prices[i]
    }
  }

  // 计算剩余资金
  const residualMoney = money - (minPrice + nextMinPrice)

  return residualMoney >= 0 ? residualMoney : money
}

// 排序
function buyChoco1(prices: number[], money: number): number {
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
