/**
 * Split string
 * Write a function that takes two arguments, the first one being a String and
 * the second one being an unordered list of words.
 * The function should determine if the first argument can be partitioned into
 * one or more existing words from the list of words provided in the second argument.
 * The response should be either YES or NO, where YES indicates that the first argument
 * can be partitioned and NO indicates that it is not possible.
 * It should be considered YES only if the partitioning result is complete,
 * meaning that no characters are left over.
 *
 * @dificulty Easy
 * @example
 * solution1("julio", ["julio"]) -> 'YES'
 */

import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

/**
 * Time: O(n)
 * Space: O(1)
 * @param {string} input - The input string.
 * @param {string[]} dictionary - The list of words.
 * @returns {"YES" | "NO"} - The response.
 */
function solution1(input, dictionary) {
  for (const name of dictionary) {
    input = input.replace(name, "");
  }
  return input.length == 0 ? "YES" : "NO";
}

describe("Split String", () => {
  it("should return correct results", () => {
    const dictionary = ["julio", "eduardo", "martins", "victor", "santos"];

    const scenarios = [
      ["julioeduardo", "YES"],
      ["julio", "YES"],
      ["julioeduardoma", "NO"],
      ["victor", "YES"],
      ["vic", "NO"],
      ["martins", "YES"],
      ["martinsmartins", "NO"],
    ];

    for (const [input, expected] of scenarios) {
      deepEqual(solution1(input, dictionary), expected);
    }
  });
});
