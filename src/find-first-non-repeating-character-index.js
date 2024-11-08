/**
 * Find First Non-Repeating Character Index
 * Write a function that returns the index of the first non-repeating character in a string.
 * If there is no non-repeating character, return -1.
 * The solution must have O(n) time complexity.
 *
 * @example
 * solution1("abcdcaf") -> 1
 *
*/
import { deepEqual } from 'node:assert';

/**
 * Time: O(n)
 * Space: O(n)
 * @param {string} word
 * @returns {number}
 */
const solution1 = (word) => {
  const charCounts = new Map();

  // Count the frequency of each character
  for (const char of word) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  // Find the first non-repeating character
  for (let i = 0; i < word.length; i++) {
    if (charCounts.get(word[i]) === 1) {
      return i;
    }
  }

  return -1;
};

export default () => {
  // should return correct results
  {
    deepEqual(solution1("abcdcaf"), 1);
    deepEqual(solution1("aabbcc"), -1);
    deepEqual(solution1("abcde"), 0);
    deepEqual(solution1(""), -1);
  }
};
