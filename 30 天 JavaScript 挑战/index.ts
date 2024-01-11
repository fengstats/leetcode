const parentObj = { name: 'father', test1: '1' }
const childObj = Object.create(parentObj)
childObj.name = 'son'
childObj.length = 1

const arr: any[] = [1, 2]

// arr.newProperty = 1

// for (const i of arr) {
// }

Object.prototype.hasOwnProperty

for (const key of Object.keys(childObj)) {
  console.log(key)
  // childObj.hasOwnProperty(key) && console.log(key)
}
