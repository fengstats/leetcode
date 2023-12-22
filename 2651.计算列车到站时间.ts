/*
 * @lc app=leetcode.cn id=2651 lang=typescript
 *
 * [2651] 计算列车到站时间
 */

// @lc code=start

// 根据题目变量范围 1 <= arrivalTime < 24，1 <= delayedTime <= 24
// 在一天误差内，直接计算
function findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {
  const dayTime = 24
  const time = arrivalTime + delayedTime
  return time >= dayTime ? time - dayTime : time
}

// 取余
function findDelayedArrivalTime1(arrivalTime: number, delayedTime: number): number {
  return (arrivalTime + delayedTime) % 24
}

// @lc code=end
