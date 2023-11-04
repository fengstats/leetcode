/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
// 二分查找用二分，秒了！
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length

  while (left < right) {
    // 用减法代替加法 y+x/2 === (y-x)/2+x
    // 其实就是重置边界，假设 x = 2，y = 6，减法操作就变成 x = 0，y = 4 了
    // 这时求出中心点距离为 2，最后加上 x，中心点坐标不就是 4，感觉文字还是过于抽象了……画个图应该好理解多了
    // 总而言之，这么干是为了防止溢出之后计算错误，举个例子：y 的值已经是最大数值 Number.MAX_VALUE 了
    // 此时再加上 x 多少也就还是 MAX_VALUE，这个时候找的中心点坐标肯定是不对的，JS 虽说不会报错，但也需要注意下
    const mid = Math.floor((right - left) / 2 + left)
    // 找到了，出去！
    if (nums[mid] === target) return mid
    // 太小了，下一轮向右搜
    else if (nums[mid] < target) left = mid + 1
    // 太大了，下一轮向左搜
    // 因为我的 right 初始值就是整个数组的长度
    // 循环退出条件是 left >= right，所以这里不需要 mid - 1 去多此一举（优雅！）
    else right = mid
  }

  // 这题并不需要我们返回插入位置（否则 left or right 都行），到这了说明数组内没有目标值
  return -1
}
// @lc code=end
