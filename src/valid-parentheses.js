/**
 * Valid Parentheses
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 *
 * @example
 * solution('()') -> true
 */
const { deepEqual } = require('assert')

/**
 * Time: O(n)
 * Space: O(n)
 * @param {String} str
 * @returns {Boolean}
 */
function solution1(str) {
  if (str.length % 2 !== 0) return false

  const stack = []
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  for (const s of str) {
    if (map[s] && map[s] === stack.pop()) {
      continue
    }
    stack.push(s)
  }

  return stack.length === 0
}

module.exports = () => {
  // should return correct results
  {
    deepEqual(solution1('()'), true)
    deepEqual(solution1('([{}])'), true)
    deepEqual(solution1('()[]{}'), true)
    deepEqual(solution1('(]'), false)
    deepEqual(solution1('([)]'), false)
    deepEqual(solution1('{[()]}'), true)
    deepEqual(solution1(''), true)
    deepEqual(solution1('(('), false)
    deepEqual(solution1('))'), false)
    deepEqual(solution1('[{]}'), false)
  }
}
