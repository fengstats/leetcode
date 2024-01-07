type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | JSONValue[]

// O(1)
function isEmpty(obj: Obj): boolean {
  // 有值的情况组多只进入一次循环
  for (let _ in obj) return false
  return true
}

// O(n)
function isEmpty2(obj: Obj): boolean {
  // 为空时转换的字符串为 []/{}
  if (JSON.stringify(obj).length === 2) return true
  return false
}

// 根据类型判断
function isEmpty1(obj: Obj): boolean {
  if (Array.isArray(obj)) return obj.length === 0
  return Object.keys(obj).length === 0
}
