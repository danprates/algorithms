/**
 * Valid Palindrome
 * Given a string, determine if it is a valid palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * @example
 * solution('level') -> true
 */
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

/**
 * Time: O(n)
 * Space: O(n)
 * @param {string} str
 * @returns {boolean}
 */
function solution1(str) {
  str = str.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result === str;
}

/**
 * Time: O(n)
 * Space: O(1)
 * @param {string} str
 * @returns {boolean}
 */
function solution2(str) {
  str = str.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }
  return true;
}

describe("Valid Palindrome", () => {
  it("should return correct values", () => {
    const scenarios = [
      ["level", true],
      ["A man, a plan, a canal: Panama", true],
      ["race a car", false],
      ["detartrated", true],
      ["", true],
      ["PP", true],
      ["0P", false],
      ["was it a car or a cat I saw", true],
      ["not a palindrome", false],
    ];

    for (const [str, expected] of scenarios) {
      deepEqual(solution1(str), expected);
      deepEqual(solution2(str), expected);
    }
  });
});
