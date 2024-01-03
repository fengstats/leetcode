type TimesType = {
  [key: number]: NodeJS.Timeout
}

class TimeLimitedCache {
  map: Map<number, number>
  times: TimesType

  constructor() {
    // 存储正常键值对数据
    this.map = new Map()
    // 存储每个 key 的
    this.times = {}
  }

  set(key: number, value: number, duration: number): boolean {
    // 是否存在
    const isExists = this.map.has(key)
    // 关闭这个 key 上次的定时器
    if (isExists) clearTimeout(this.times[key])

    // 设置一个新的，到了时间就删 key
    // NOTE: 避免 this 指向混乱，使用箭头函数
    this.times[key] = setTimeout(() => this.map.delete(key), duration)

    // 设置或覆盖
    this.map.set(key, value)
    return isExists
  }

  get(key: number): number {
    return this.map.get(key) ?? -1
  }

  count(): number {
    return this.map.size
  }
}

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)) // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1
