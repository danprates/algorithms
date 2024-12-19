/**
 * given an array A of N integers, returns the smallest positive integer
 * (greater than 0) that does not occur in A.
 *
 * @difficulty Easy
 * @example
 * solution([1, 3, 6, 4, 1, 2]) -> 5
 */

import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

/**
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} A
 * @returns {number}
 */
function solution1(A) {
  const positiveNums = new Set(A);

  let smallest = 1;

  while (positiveNums.has(smallest)) {
    smallest++;
  }

  return smallest;
}

describe("Smallest Number", () => {
  it("should return correct results", () => {
    const scenarios = [
      [[1, 3, 6, 4, 1, 2], 5],
      [[2, 2, -3, 4, 5, 6], 1],
      [[1, 2, 3, -4, 5, 6], 4],
      [[1, 2, 3, 4, 5, 6], 7],
    ];

    for (const [input, expected] of scenarios) {
      deepEqual(solution1(input), expected);
    }
  });
});
