/**
 * Max Consecutive Ones
 * Given an array of integers that contains only 0s and 1s, we may change up to k values from 0 to 1.
 * Find the maximum length of a sequence of consecutive 1s.
 *
 * @dificulty Medium
 * @example
 * solution([0, 0, 0, 0, 1, 1, 1, 1], 3) -> 7
 */
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

/**
 * Time: O(n)
 * Space: O(1)
 * @param {Number[]} numbers the array of numbers
 * @param {Number} k the number of consecutive ones
 * @returns {Number}
 */
function solution1(numbers, k) {
  let left = 0;
  let right = 0;

  while (right < numbers.length) {
    if (numbers[right] === 0) k--;

    if (k < 0) {
      if (numbers[left] === 0) k++;
      left++;
    }
    right++;
  }

  return right - left;
}

describe("Max consecutive ones", () => {
  it("should return correct results", () => {
    const scenarios = [
      [[0, 0, 0, 0, 1, 1, 1, 1], 3, 7],
      [[1, 0, 1, 1, 0, 1], 1, 4],
      [[0, 0, 1, 1, 0, 1, 1, 1], 2, 7],
      [[1, 1, 1, 1], 1, 4],
      [[0, 0, 0], 1, 1],
      [[], 5, 0],
    ];

    for (const [numbers, k, expected] of scenarios) {
      deepEqual(solution1(numbers, k), expected);
    }
  });
});
