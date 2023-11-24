// 两个 s1 字符串拼接之后如果包含 s2 就说明是轮转之后的
function isFlipedString(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false

  return (s1 + s1).includes(s2)
}
