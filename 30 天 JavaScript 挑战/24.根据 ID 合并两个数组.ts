type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type ArrayType = { id: number } & Record<string, JSONValue>

// TODO: 二分

// 对象
function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const obj = {}
  for (const item of arr1) obj[item.id] = item
  for (const item of arr2) {
    // 通过 Object.assign 用新对象覆盖原对象属性
    const key = item.id
    // 注意 obj[key] 可能为 undefined
    obj[key] = Object.assign(obj[key] ?? {}, item)
  }

  // 直接通过对象插入新属性时，会通过对象 key 进行排序
  // 所以在使用 Object.values 转换时 id 是升序返回的
  return Object.values(obj)
}

// hashMap
function join1(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
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

const arr1: ArrayType[] = [
  { id: 1, x: 36, d: 26, f: 35 },
  { id: 3, c: 20, z: 75 },
]
const arr2: ArrayType[] = [{ id: 2, o: 48, z: 84, y: 61 }]

console.log(join(arr1, arr2))
