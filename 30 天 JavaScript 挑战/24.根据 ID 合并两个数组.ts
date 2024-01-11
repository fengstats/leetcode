type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type ArrayType = { id: number } & Record<string, JSONValue>

// hashMap
function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const map = new Map<number, ArrayType>()
  for (const item of arr1) map.set(item.id, item)
  for (const item of arr2) {
    if (map.has(item.id)) {
      // 存在则将新对象属性全面覆盖到旧对象上
      const oldItem = map.get(item.id) as ArrayType
      for (const key of Object.keys(item)) {
        oldItem[key] = item[key]
      }
    } else {
      // 不存在则添加
      map.set(item.id, item)
    }
  }

  // 题目要求要升序排列
  return Array.from(map.values()).sort((a, b) => a.id - b.id)
}

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
]
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
]

console.log(join(arr1, arr2))
