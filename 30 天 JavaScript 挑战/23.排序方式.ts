type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Fn = (value: JSONValue) => number

// 原生 API sort 函数原地排序
function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b))
}
