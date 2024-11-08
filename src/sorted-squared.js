/**
 * Sorted Squared
 * Given a non-empty array of integers (negatives and positives) that are sorted in ascending order,
 * returns a new array of the same length with the squares of the original integers also sorted in ascending order.
 * The solution must have a time and space complexity of O(n).
 *
 * @example
 * sortedSquared([1, 2, 3, 5, 6, 8, 9]) -> [1, 4, 9, 25, 36, 64, 81]
*/
import { deepEqual } from 'node:assert';

/**
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} arr - The input array of integers.
 * @returns {number[]} - The new array with squared values sorted in ascending order.
 */
const solution1 = (arr) => {
  const n = arr.length;
  const result = new Array(n);
  let left = 0;
  let right = n - 1;
  let i = n - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left];
    const rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      result[i] = leftSquare;
      left++;
    } else {
      result[i] = rightSquare;
      right--;
    }

    i--;
  }

  return result;
};

export default () => {
  // should return correct results
  {
    deepEqual(solution1([1, 2, 3, 5, 6, 8, 9]), [1, 4, 9, 25, 36, 64, 81]);
    deepEqual(solution1([-4, -3, -2, 0, 1, 5, 10]), [0, 1, 4, 9, 16, 25, 100]);
    deepEqual(solution1([-9, -7, -5, -3, -1]), [1, 9, 25, 49, 81]);
    deepEqual(solution1([2]), [4]);
    deepEqual(solution1([-3, -2, -1]), [1, 4, 9]);
    deepEqual(solution1([0, 1, 2, 3]), [0, 1, 4, 9]);
    deepEqual(solution1([]), []);
  }
};
