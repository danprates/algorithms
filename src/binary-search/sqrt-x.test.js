/**
 * given a non-negative integer x, returns the square root of x rounded down
 * to the nearest integer, without using any built-in exponent function or operator.
 *
 * @difficulty Easy
 * @example
 * solution(4) -> 2
 * solution(8) -> 2
 */

import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

/**
 * Time: O(√x)
 * Space: O(1)
 * @param {number} x
 * @returns {number}
 */
function solution1(x) {
  let res = 0;

  for (let i = 1; i * i <= x; i++) {
    res = i;
  }

  return res;
}

/**
 * Time: O(log x)
 * Space: O(1)
 * @param {number} x
 * @returns {number}
 */
function solution2(x) {
  let left = 0;
  let right = x;
  let res = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid <= x) {
      res = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}

describe("Sqrt(x)", () => {
  it("should return correct results", () => {
    const scenarios = [
      [0, 0],
      [1, 1],
      [2, 1],
      [4, 2],
      [8, 2],
      [9, 3],
      [15, 3],
      [16, 4],
      [2147483647, 46340],
    ];

    for (const [input, expected] of scenarios) {
      deepEqual(solution1(input), expected);
      deepEqual(solution2(input), expected);
    }
  });
});
