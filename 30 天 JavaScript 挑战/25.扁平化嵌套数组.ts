type MultiDimensionalArray = (number | MultiDimensionalArray)[]

// 递归
var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  // 展开不了了
  if (n <= 0) return arr

  const ans: MultiDimensionalArray = []
  for (const item of arr) {
    if (n && Array.isArray(item)) {
      // 需要展开 并且 当前元素是数组
      const newArr = flat(item, n - 1)
      // NOTE: 这个 newArr 一定会返回一个数组
      // 所以我们需要用 ... 展开一层
      ans.push(...newArr)
    } else {
      // 不需要展开
      ans.push(item)
    }
  }

  return ans
}

console.log(flat([1, [2, 3, [4, 5]]], 2))
