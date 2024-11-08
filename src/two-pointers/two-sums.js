/**
 * Two Sum
 * Given an array of integers and a target value, find two numbers that sum to the target value.
 * Return the indices of these numbers in the array.
 * @dificulty Easy
 * @example
 * solution(9, [4, 1, 2, -2, 11, 16, 1, -1, -6, -4]) -> [-2, 11]
 */
import { deepEqual } from 'node:assert'

/**
 * Time: O(n^2)
 * Space: O(1)
 * @param {Number} target
 * @param {Number[]} numbers
 * @returns {Number[]}
 */
function solution1(target, numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j]
      if (sum === target) {
        return [numbers[i], numbers[j]]
      }
    }
  }
  return []
}

/**
 * Time: O(n)
 * Space: O(n)
 * @param {Number} target
 * @param {Number[]} numbers
 * @returns {Number[]}
 */
function solution2(target, numbers) {
  const calculated = new Map()

  for (let n of numbers) {
    const calc = target - n;

    if (calculated.has(calc)) {
      return [calc, n]
    }

    calculated.set(n, true)
  }

  return []
}

/**
 * Time: O(n log(n))
 * Space: O(1)
 * @param {Number} target
 * @param {Number[]} numbers
 * @returns {Number[]}
 */
function solution3(target, numbers) {
  /**
   * the solution became O(n log(n)) because of the sorting
   * otherwise it would be O(n)
   */
  numbers.sort((a, b) => a - b)
  let leftPointer = 0
  let rightPointer = numbers.length - 1

  while (leftPointer < rightPointer) {
    const sum = numbers[leftPointer] + numbers[rightPointer]

    if (sum === target) {
      return [numbers[leftPointer], numbers[rightPointer]]
    } else if (sum < target) {
      leftPointer += 1
    } else if (sum > target) {
      rightPointer -= 1
    }
  }

  return []
}

export default () => {
  // should return correct results
  {
    deepEqual(solution1(9, [4, 1, 2, -2, 11, 16, 1, -1, -6, -4]), [-2, 11])
    deepEqual(solution1(5, [1, 2, 3, 4]), [1, 4])
    deepEqual(solution1(10, [1, 2, 3, 4, 5, 6]), [4, 6])
    deepEqual(solution1(-5, [-1, -2, -3, -4, -5]), [-1, -4])
    deepEqual(solution1(6, [3, 3]), [3, 3])

    deepEqual(solution2(9, [4, 1, 2, -2, 11, 16, 1, -1, -6, -4]), [-2, 11])
    deepEqual(solution2(5, [1, 2, 3, 4]), [2, 3])
    deepEqual(solution2(10, [1, 2, 3, 4, 5, 6]), [4, 6])
    deepEqual(solution2(-5, [-1, -2, -3, -4, -5]), [-2, -3])
    deepEqual(solution2(6, [3, 3]), [3, 3])

    deepEqual(solution3(9, [4, 1, 2, -2, 11, 16, 1, -1, -6, -4]), [-2, 11])
    deepEqual(solution3(5, [1, 2, 3, 4]), [1, 4])
    deepEqual(solution3(10, [1, 2, 3, 4, 5, 6]), [4, 6])
    deepEqual(solution3(-5, [-1, -2, -3, -4, -5]), [-4, -1])
    deepEqual(solution3(6, [3, 3]), [3, 3])
  }

  // should return empty array if no two numbers sum to target
  {
    const data = [
      { target: 8, numbers: [1, 2, 3, 4], expected: [] },
      { target: 0, numbers: [1, 2, 3, 4], expected: [] },
      { target: 10, numbers: [-1, -2, -3, -4], expected: [] }
    ];
    data.forEach(({ target, numbers, expected }) => {
      deepEqual(solution1(target, numbers), expected);
      deepEqual(solution2(target, numbers), expected);
      deepEqual(solution3(target, numbers), expected);
    });
  }

  // should handle edge cases
  {
    const data = [
      { target: 0, numbers: [], expected: [] },
      { target: 5, numbers: [5], expected: [] },
      { target: 0, numbers: [0, 0, 0], expected: [0, 0] },
      { target: 1, numbers: [1, 1], expected: [] },
      { target: -1, numbers: [1, 1], expected: [] },
    ];
    data.forEach(({ target, numbers, expected }) => {
      deepEqual(solution1(target, numbers), expected);
      deepEqual(solution2(target, numbers), expected);
      deepEqual(solution3(target, numbers), expected);
    });
  }
}

