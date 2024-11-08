/**
 * Max Consecutive Ones
 * Given an array of integers that contains only 0s and 1s, we may change up to k values from 0 to 1.
 * Find the maximum length of a sequence of consecutive 1s.
 *
 * @example
 * solution([0, 0, 0, 0, 1, 1, 1, 1], 3) -> 7
 */
import { deepEqual } from 'node:assert'

/**
 * Time: O(n)
 * Space: O(1)
 * @param {Number[]} numbers
 * @param {Number} k
 * @returns {Number}
 */
function solution1(numbers, k) {
  let left = 0
  let right = 0

  while (right < numbers.length) {
    if (numbers[right] === 0) k--

    if (k < 0) {
      if (numbers[left] === 0) k++
      left++
    }
    right++
  }

  return right - left
}

export default () => {
  // should return correct results
  {
    deepEqual(solution1([0, 0, 0, 0, 1, 1, 1, 1], 3), 7)
    deepEqual(solution1([1, 0, 1, 1, 0, 1], 1), 4)
    deepEqual(solution1([0, 0, 1, 1, 0, 1, 1, 1], 2), 7)
    deepEqual(solution1([1, 1, 1, 1], 1), 4)
    deepEqual(solution1([0, 0, 0], 1), 1)
    deepEqual(solution1([], 5), 0)
  }
}
