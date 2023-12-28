type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  for (const num of nums) {
    init = fn(init, num)
  }
  return init
}

// 其实就是实现 reduce 功能
function reduce1(nums: number[], fn: Fn, init: number): number {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i])
  }
  return init
}
