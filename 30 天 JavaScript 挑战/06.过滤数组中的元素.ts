type Fn = (n: number, i: number) => any

/**
 * 过滤数组中的元素，返回符合条件的元素组成的数组。
 *
 * @param arr 待过滤的数组
 * @param fn 判断条件函数，接收一个元素和索引，返回一个布尔值
 * @returns 符合条件的元素组成的数组
 */

// 原地操作数组
function filter(arr: number[], fn: Fn): number[] {
  let size = 0
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      arr[size] = arr[i]
      size++
    }
  }
  // 截断数组, 这里也可以选择根据长度判断 pop 掉后面多余的元素
  arr.length = size
  return arr
}

// 返回新数组
function filter1(arr: number[], fn: Fn): number[] {
  const ansArr: number[] = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      ansArr.push(arr[i])
    }
  }
  return ansArr
}
