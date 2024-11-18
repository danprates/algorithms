/**
 * Valid Parentheses
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 *
 * @dificulty Easy
 * @example
 * solution('()') -> true
 */
import { deepEqual } from "node:assert";
import { describe, test } from "node:test";

/**
 * Time: O(n)
 * Space: O(n)
 * @param {String} str
 * @returns {Boolean}
 */
function solution1(str) {
  if (str.length % 2 !== 0) return false;

  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const s of str) {
    if (map[s] && map[s] === stack.pop()) {
      continue;
    }
    stack.push(s);
  }

  return stack.length === 0;
}

describe("Valid Parentheses", () => {
  test("should return correct values", () => {
    const scenarios = [
      ["()", true],
      ["([{}])", true],
      ["()[]{}", true],
      ["(]", false],
      ["([)]", false],
      ["{[()]}", true],
      ["", true],
      ["((", false],
      ["))", false],
      ["[{}]", true],
    ];

    for (const [str, expected] of scenarios) {
      deepEqual(solution1(str), expected);
    }
  });
});
