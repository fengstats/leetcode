/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start

// 循环不变量：按照从「 左->右、上->下、右->左、下->上 」的方式围着整个矩阵转圈
// 从外圈到内圈，慢慢收缩到中心点的位置把这个矩阵画出来，这里选择左闭右开的原则来执行
// 所以如果矩阵为奇数情况需要单独处理（中心点）
function generateMatrix(n: number): number[][] {
  // 起始坐标位置，会随着转圈逐渐收缩
  let startX = 0
  let startY = 0
  // 可转圈数，转一圈等于处理了两条边，所以这里减半
  let loopNum = Math.floor(n / 2)
  // 矩阵内生成的数值计数器
  let value = 1

  // NOTE: 这里不能直接使用 fill 返回数组，因为 value 为对象的情况，那么数组的每一项都会是这个对象的引用
  // 具体参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#value
  // const matrix = new Array(n).fill(new Array(n).fill(0))
  // 先将整个矩阵框架画出来并使用 0 填充
  const matrix: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))

  while (loopNum) {
    let column = startX
    let row = startY
    // 左->右
    while (column < n - (startX + 1)) {
      matrix[row][column] = value++
      column++
    }
    // 上->下
    while (row < n - (startY + 1)) {
      matrix[row][column] = value++
      row++
    }
    // 右->左
    while (column > startX) {
      matrix[row][column] = value++
      column--
    }
    // 下->上
    while (row > startY) {
      matrix[row][column] = value++
      row--
    }

    // 坐标位置更新
    startX++
    startY++
    // 向内圈收缩
    loopNum--
  }

  // 奇数矩阵，更新中心点坐标即可
  if (n % 2 === 1) matrix[startX][startY] = value

  return matrix
}
// @lc code=end

console.log(generateMatrix(4))
