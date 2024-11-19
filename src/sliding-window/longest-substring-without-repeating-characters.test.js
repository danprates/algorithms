/**
 * Longest Substring Without Repeating Characters
 * Given a string, find the length of the longest substring that does not contain repeating characters.
 *
 * @difficulty Medium
 * @example
 * solution('abcabcbb') -> 3
 */
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

/**
 * Time: O(n)
 * Space: O(1)
 * @param {String} str
 * @returns {Number}
 */
function solution1(str) {
  let right = 0;
  let left = 0;
  let max = 0;
  const hash = new Set();

  while (right < str.length) {
    const char = str.at(right);
    if (hash.has(char)) {
      hash.delete(str.at(left));
      left++;
    } else {
      hash.add(char);
      right++;
      max = Math.max(hash.size, max);
    }
  }

  return max;
}

describe("Longest Substring Without Repeating Characters", () => {
  it("should return correct results", () => {
    const scenarios = [
      ["abcabcbb", 3],
      ["abccbad", 4],
      ["pwwkew", 3],
      ["bbbbb", 1],
      ["", 0],
      ["abcdefghijklmnopqrstuvwxyz", 26],
      ["abba", 2],
      ["aab", 2],
    ];

    for (const [input, expected] of scenarios) {
      deepEqual(solution1(input), expected);
    }
  });
});
