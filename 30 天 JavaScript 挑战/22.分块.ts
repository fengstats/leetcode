declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
  }
}

Array.prototype.groupBy = function (fn) {
  const obj = {}
  for (const item of this) {
    const groupKey = fn(item)
    if (!obj.hasOwnProperty(groupKey)) {
      obj[groupKey] = []
    }
    obj[groupKey].push(item)
  }

  return obj
}
console.log([1, 2, 3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}
// ;[{ id: 1 }, { id: 2 }, { id: 1 }].groupBy((item) => String(item.id))

// 修复错误：全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中
// 参考链接：https://typescript.tv/errors/#ts2669
export {}
