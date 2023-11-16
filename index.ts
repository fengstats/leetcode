// 集合
const a = [1, 2, 3, 4, 6, 7, 8]
const b = [1, 3, 5, 7, 8]
const c = [1, 2, 4, 6, 9, 10]

// todo: 求 abc 的交集、并集、差集

// 题目：找大于等于 target 的最小下标
// 二分：左闭右开
function binarySearch(nums: number[], target: number, left: number) {
  let right = nums.length
  while (left < right) {
    const mid = Math.floor((right - left) / 2 + left)
    if (nums[mid] >= target) {
      // 等于的情况和大于的情况融合，舍弃掉右边，下轮搜左边看看
      // 如果这个值就是最小的了，left 自然会与之重合
      right = mid
    } else {
      left = mid + 1
    }
  }

  // 重合出答案
  return left
}

console.log(binarySearch([8, 17, 17, 17], 17, 0))
