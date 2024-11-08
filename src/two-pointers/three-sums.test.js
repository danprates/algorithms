/**
 * Three Sums
 * Given an array of integers, find all triplets of elements that sum to zero.
 *
 * @example
 * solution([12, 3, 1, 2, -6, 5 -8, 6], 0) -> [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 */
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

/**
 * Time: O(n^3)
 * Space: O(1)
 * @param {Number[]} numbers
 * @param {Number} target
 * @returns {Number[][]}
 */
function solution1(numbers, target) {
  const result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    const first = numbers[i];
    for (let j = i + 1; j < numbers.length - 1; j++) {
      const second = numbers[j];
      for (let k = j + 1; k < numbers.length; k++) {
        const third = numbers[k];
        if (first + second + third === target) {
          result.push([first, second, third].sort((a, b) => a - b));
        }
      }
    }
  }

  return result;
}

/**
 * Time: O(n^2)
 * Space: O(n)
 * @param {Number[]} numbers
 * @param {Number} target
 * @returns {Number[][]}
 */
function solution2(numbers, target) {
  const result = [];
  numbers.sort((a, b) => a - b);

  for (let current = 0; current < numbers.length; current++) {
    let left = current + 1;
    let right = numbers.length - 1;

    while (left < right) {
      let sum = numbers.at(current) ?? 0;
      sum += numbers.at(left);
      sum += numbers.at(right);

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        result.push(
          [numbers.at(current), numbers.at(left), numbers.at(right)].sort(
            (a, b) => a - b
          )
        );
        left++;
        right--;
      }
    }
  }

  return result;
}

describe("Three Sums", () => {
  it("should return correct values", () => {
    deepEqual(solution1([12, 3, 1, 2, -6, 5, -8, 6], 0), [
      [-8, 3, 5],
      [-6, 1, 5],
      [-8, 2, 6],
    ]);
    deepEqual(solution1([0, 0, 0], 0), [[0, 0, 0]]);
    deepEqual(solution1([1, 2, 3, 4, 5], 9), [
      [1, 3, 5],
      [2, 3, 4],
    ]);
    deepEqual(solution1([1, 2, 3, 4, 5], 100), []);
    deepEqual(solution1([], 5), []);
    deepEqual(solution1([1], 1), []);

    deepEqual(solution2([12, 3, 1, 2, -6, 5, -8, 6], 0), [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
    deepEqual(solution2([0, 0, 0], 0), [[0, 0, 0]]);
    deepEqual(solution2([1, 2, 3, 4, 5], 9), [
      [1, 3, 5],
      [2, 3, 4],
    ]);
    deepEqual(solution2([1, 2, 3, 4, 5], 100), []);
    deepEqual(solution2([], 5), []);
    deepEqual(solution2([1], 1), []);
  });
});
