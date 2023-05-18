/**
 * Generate Sentence
 * Write a function to determine if you can generate a sentence using the available characters.
 * If you can generate the sentence you should return true otherwise return false.
 * Solution must be O(n+m) time complexity, where n is the number of characters and m is the length of the sentence
 *
 * @example
 * solution("leeehhhoooo", "hello") -> false
 */
const { deepEqual } = require('assert')

/**
 * Time: O(n)
 * Space: O(1)
 * @param {string} numbers
 * @param {string} k
 * @returns {boolean}
 */
const solution1 = (characters, sentence) => {
  const charMap = new Map();

  // Count the frequency of characters in the characters string
  for (const char of characters) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // Check if each character in the sentence is available in sufficient quantity
  for (const char of sentence) {
    if (!charMap.has(char) || charMap.get(char) === 0) {
      return false;
    }
    charMap.set(char, charMap.get(char) - 1);
  }

  return true;
}
module.exports = () => {
  // should return correct results
  {
    deepEqual(solution1("Bstesi Tt!eh rella ", "Taller is the Best!"), true);
    deepEqual(solution1("eeellllrrrrTTTTttttaaAAAEEEEeeeessss", "Taller"), true);
    deepEqual(solution1("loheeeehhhoooo", "hello"), false);
    deepEqual(solution1("ABCDEF", "ABCDEF"), true);
    deepEqual(solution1("ABCDEF", "XYZ"), false);
    deepEqual(solution1("", "Hello"), false);
    deepEqual(solution1("Hello", ""), true);
  }
}
