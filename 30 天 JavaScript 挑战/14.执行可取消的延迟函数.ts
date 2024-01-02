type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  // NOTE: args 会在 t 毫秒后作为参数传入 fn 函数
  const timeoutId = setTimeout(fn, t, ...args)
  return () => {
    // 通过闭包取消计时器，取决于用户何时调用
    clearTimeout(timeoutId)
  }
}

const result: JSONValue[] = []
const fn = (x: number) => x * 5
const args = [2]
const t = 20
const cancelTimeMs = 50
const start = performance.now()

const log = (...argsArr: JSONValue[]) => {
  const diff = Math.floor(performance.now() - start)
  result.push({ time: diff, returned: fn(argsArr[0] as number) })
}

const cancel = cancellable(log, args, t)

const maxT = Math.max(t, cancelTimeMs)

setTimeout(cancel, cancelTimeMs)

setTimeout(() => {
  console.log(result) // [{"time":20,"returned":10}]
}, maxT + 15)
