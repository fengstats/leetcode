type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue>

// 一个个 push
function chunk(arr: Obj[], size: number): Obj[][] {
  const resArr: Obj[][] = []
  let tmpArr: Obj[] = []
  for (let i = 0; i < arr.length; i++) {
    tmpArr.push(arr[i])
    // 临时数组长度等于需要切割的长度
    // 或者已经是最后一个了
    // 那就放到结果二维数组中
    if (tmpArr.length === size || i === arr.length - 1) {
      resArr.push(tmpArr)
      tmpArr = []
    }
  }
  return resArr
}

// 其实就是实现 lodash 的 chunk 函数功能
function chunk1(arr: Obj[], size: number): Obj[][] {
  const resArr: Obj[][] = []

  for (let i = 0; i < arr.length; i += size) {
    // slice 切割数组函数包前不包后
    // Math.min 保证下标不会越界的问题
    resArr.push(arr.slice(i, Math.min(i + size, arr.length)))
  }

  return resArr
}
