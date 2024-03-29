type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  // 手写快速排序
  function quickSort(arr): JSONValue[] {
    // 递归退出条件：数组只有一个元素或者没有
    if (arr.length <= 1) {
      return arr
    }
    // 基准值
    const baseValue = arr[0]
    // 比基准值小的数组
    const leftArr: JSONValue[] = []
    // 比基准值大的数组
    const rightArr: JSONValue[] = []
    // 遍历手动跳过基准值
    for (let i = 1; i < arr.length; i++) {
      if (fn(baseValue) >= fn(arr[i])) {
        leftArr.push(arr[i])
      } else {
        rightArr.push(arr[i])
      }
    }
    // 左右分别进行递归处理最后合并
    // NOTE: 小坑，concat 遇到多维数组合并时会自动展开一层内部元素
    // 这就导致了 [[1,2]].concat([3,4], [[5,6]]) 会变成 [[1,2],3,4,[5,6]]
    // 中间的 [3,4] 我是不希望被展开的，所以在使用时需要给 baseValue 添加一个 []
    return quickSort(leftArr).concat([baseValue], quickSort(rightArr))
    // 也可以使用 `...` 扩展运算符，行为与 concat 相似，但不需要额外给 baseValue 添加一个 []
    // return [...quickSort(leftArr), baseValue, ...quickSort(rightArr)]
  }

  return quickSort(arr)
}

// 原生 API sort 函数原地排序
function sortBy1(arr: JSONValue[], fn: Fn): JSONValue[] {
  // a - b 升序
  // b - a 降序
  return arr.sort((a, b) => fn(a) - fn(b))
}

console.log(
  JSON.stringify(
    sortBy(
      [
        [3, 3],
        [2, 2],
        [1, 1],
      ],
      (x) => x![1],
    ),
  ),
)
