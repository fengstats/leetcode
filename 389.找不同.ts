/*
 * @lc app=leetcode.cn id=389 lang=typescript
 *
 * [389] 找不同
 */

// @lc code=start
// 思路：还是 hashMap，这次我们先存储 s 字符串中所有字母以及对应的出现次数
// 通过遍历 t 字符串（被重新打乱且添加一个随机字母），找到一个就删除一次出现次数
// 直到出现 Map value 为 0（出现过的）或者 undefined 的字母（没出现过的），就找到啦
function findTheDifference(s: string, t: string): string {
  const map = new Map()
  // 存储
  for (let i = 0; i < s.length; i++) {
    const key = s[i]
    if (map.has(key)) map.set(key, map.get(key) + 1)
    else map.set(key, 1)
  }

  // 删除
  for (let i = 0; i < t.length; i++) {
    const key = t[i]
    if ([0, undefined].includes(map.get(key))) return key
    if (map.has(key)) map.set(key, map.get(key) - 1)
  }

  return ''
}

// 思路：亦或
// 补充：JavaScript 没有“字符的亦或运算”，害

// 思路：合并两个数组，使用 hashMap 存储数组中字母出现的次数，最后遍历 Map
// 找到 value 为 1 的就是我们需要的字母
// 补充：这个思路有问题，没考虑字母可能会重复出现，而且不止一次。
function findTheDifference1(s: string, t: string): string {
  const map = new Map()
  const arr = [...s, ...t]

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i]
    if (!map.has(key)) map.set(key, 1)
    else map.set(key, map.get(key) + 1)
  }

  for (let [key, val] of map.entries()) {
    if (val === 1) return key
  }

  return ''
}
// @lc code=end
console.log(findTheDifference('abcd', 'abcde'))
console.log(findTheDifference('a', 'aays'))
