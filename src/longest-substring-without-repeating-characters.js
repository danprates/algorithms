/**
 * Longest Substring Without Repeating Characters
 * Given a string, find the length of the longest substring that does not contain repeating characters.
 *
 * @example
 * solution('abcabcbb') -> 3
 */
const { deepEqual } = require('assert')

/**
 * Time: O(n)
 * Space: O(1)
 * @param {String} str
 * @returns {Number}
 */
function solution1(str) {
  let right = 0
  let left = 0
  let max = 0
  const hash = new Set()

  while (right < str.length) {
    const char = str.at(right)
    if (hash.has(char)) {
      hash.delete(str.at(left))
      left++
    } else {
      hash.add(char)
      right++
      max = Math.max(hash.size, max)
    }
  }

  return max
}

module.exports = () => {
  // should return correct results
  {
    deepEqual(solution1('abcabcbb'), 3)
    deepEqual(solution1('abccbad'), 4)
    deepEqual(solution1('pwwkew'), 3)
    deepEqual(solution1('bbbbb'), 1)
    deepEqual(solution1(''), 0)
    deepEqual(solution1('abcdefghijklmnopqrstuvwxyz'), 26)
    deepEqual(solution1('abba'), 2)
    deepEqual(solution1('aab'), 2)
  }
}
