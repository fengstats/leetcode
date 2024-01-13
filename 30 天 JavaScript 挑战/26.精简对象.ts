type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue>

// 递归
function compactObject(obj: Obj): Obj {
  // 注意 {} 和 [] 的 typeof 都是 object 类型
  // null 需要特殊判断，因为 typeof null 是 object 类型
  if (typeof obj !== 'object' || obj === null) {
    // 说明是一个普通类型，这就是递归的最深处返回
    return obj
  }

  let ans: Obj
  if (Array.isArray(obj)) {
    // 数组 []
    ans = []
    for (let item of obj) {
      const res = compactObject(item as Obj)
      // if 会做隐式转换，也就是 Boolean(res) 的返回结果
      if (res) ans.push(res)
    }
  } else {
    // 对象 {}
    // 既是 object 类型，又不是数组，那就只可能是对象了
    ans = {}
    // NOTE: 这里用 for in 不用 Object.keys 是因为题目所说
    // 给的对象是 JSON.parse 转换过的，不存在访问原型链属性的问题
    for (const key in obj) {
      const res = compactObject(obj[key] as Obj)
      if (res) ans[key] = res
    }
  }

  return ans
}
