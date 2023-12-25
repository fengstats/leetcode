type ToBeOrNotToBe = {
  toBe: (val: any) => boolean
  notToBe: (val: any) => boolean
}

function expect(val: any): ToBeOrNotToBe {
  function toBe(newVal) {
    if (val === newVal) {
      return true
    }
    // new 可加可不加
    throw new Error('Not Equal')
  }

  function notToBe(newVal) {
    if (val !== newVal) {
      return true
    }
    throw new Error('Equal')
  }

  return {
    toBe,
    notToBe,
  }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
