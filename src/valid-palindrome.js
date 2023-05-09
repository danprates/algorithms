/**
 * Valid Palindrome
 * Given a string, determine if it is a valid palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * @example
 * solution('level') -> true
 */
const { deepEqual } = require('assert')

/**
 * Time: O(n)
 * Space: O(n)
 * @param {string} str
 * @returns {boolean}
 */
function solution1(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result === str
}

/**
 * Time: O(n)
 * Space: O(1)
 * @param {string} str
 * @returns {boolean}
 */
function solution2(str) {
  let right = 0
  let left = str.length - 1
  while (right < left) {
    if (str[right] !== str[left]) return false

    right++
    left--
  }
  return true
}

module.exports = () => {
  // should return correct results
  {
    deepEqual(solution1('level'), true)
    deepEqual(solution1('A man, a plan, a canal: Panama'), false)
    deepEqual(solution1('race a car'), false)
    deepEqual(solution1('detartrated'), true)
    deepEqual(solution1(''), true)
    deepEqual(solution1('PP'), true)
    deepEqual(solution1('0P'), false)
    deepEqual(solution1('was it a car or a cat I saw'), false)
    deepEqual(solution1('not a palindrome'), false)

    deepEqual(solution2('level'), true)
    deepEqual(solution2('A man, a plan, a canal: Panama'), false)
    deepEqual(solution2('race a car'), false)
    deepEqual(solution2('detartrated'), true)
    deepEqual(solution2(''), true)
    deepEqual(solution2('PP'), true)
    deepEqual(solution2('0P'), false)
    deepEqual(solution2('was it a car or a cat I saw'), false)
    deepEqual(solution2('not a palindrome'), false)
  }
}
