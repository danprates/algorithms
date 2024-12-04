/**
 * Decode String
 * Given an encoded string, return its decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.
 * Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
 * Furthermore, you may assume that the original data does not contain any digits and the digits alone appear in encoded_string.
 *
 * @dificulty Medium
 * @example
 * solution('2[abc]3[cd]ef') -> 'abcabccdcdcdef'
 */
import { deepEqual } from "node:assert";
import { describe, test } from "node:test";

/**
 * Time: O(n)
 * Space: O(n)
 * @param {String} str
 * @returns {String}
 */
function solution1(str) {
  const stack = [];
  let temp = "";
  let number = 0;

  for (const s of str) {
    if (s === "[") {
      if (temp) {
        stack.push(temp);
        temp = "";
      }
      stack.push(number);
      number = 0;
    } else if (s === "]") {
      if (temp) {
        stack.push(temp);
        temp = "";
      }
      let first = stack.pop();
      let newStr = "";

      while (!Number.isInteger(first)) {
        newStr = first + newStr;
        first = stack.pop();
      }

      newStr = newStr.repeat(first);
      stack.push(newStr);
    } else {
      if (s.match(/^\d+$/)) {
        number = number * 10 + parseInt(s);
      } else {
        temp += s;
      }
    }
  }

  if (temp) {
    stack.push(temp);
  }
  return stack.join("");
}

/**
 * Time: O(n)
 * Space: O(n)
 * @param {String} str
 * @returns {String}
 */
function solution2(str) {
  const stack = [];

  for (let char of str) {
    if (char !== "]") {
      stack.push(char);
    } else {
      // Extract encoded substring
      let substr = "";
      while (stack[stack.length - 1] !== "[") {
        substr = stack.pop() + substr;
      }

      // Remove opening bracket
      stack.pop();

      // Extract repeat count
      let k = "";
      while (stack.length && !isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }

      // Repeat and push back to stack
      stack.push(substr.repeat(parseInt(k)));
    }
  }

  return stack.join("");
}

describe("Decode String", () => {
  test("should return correct values", () => {
    const scenarios = [
      ["abc", "abc"],
      ["ab2[c]", "abcc"],
      ["a3[b]", "abbb"],
      ["2[abc]3[cd]ef", "abcabccdcdcdef"],
      ["a2[b3[c]]d", "abcccbcccd"],
    ];

    for (const [str, expected] of scenarios) {
      deepEqual(solution1(str), expected);
      deepEqual(solution2(str), expected);
    }
  });
});
