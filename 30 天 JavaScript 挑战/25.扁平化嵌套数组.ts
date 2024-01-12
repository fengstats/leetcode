type MultiDimensionalArray = (number | MultiDimensionalArray)[]

// 递归优化
var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  // 这样 ans 就只会被声明一次啦
  const ans: MultiDimensionalArray = []

  // 内部处理，展开完了就 push 给 ans
  function flattening(newArr, expandNum) {
    for (const item of newArr) {
      // NOTE: 这里判断写成 n > 0 了，给我找半天！我说怎么内部元素全给展开了
      if (expandNum > 0 && Array.isArray(item)) {
        flattening(item, expandNum - 1)
      } else {
        ans.push(item)
      }
    }
  }

  // 开始递归
  flattening(arr, n)
  // 返回结果
  return ans
}

// 迭代
var flat2 = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  // 是否需要展开，且判断数组中是否还有没展开的数组元素
  while (n > 0 && arr.some(Array.isArray)) {
    // 一次展开所有数组内部元素一层，通过结合 ... 和 concat
    arr = [].concat(...(arr as []))
    n--
  }
  return arr
}

// 递归
var flat1 = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
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

// console.log(flat([1, [2, 3, [4, 5]]], 2))
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))
