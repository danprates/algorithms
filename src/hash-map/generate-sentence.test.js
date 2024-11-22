/**
 * Generate Sentence
 * Write a function to determine if you can generate a sentence using the available characters.
 * If you can generate the sentence you should return true otherwise return false.
 * Solution must be O(n+m) time complexity, where n is the number of characters and m is the length of the sentence
 *
 * @dificulty Medium
 * @example
 * solution("leeehhhoooo", "hello") -> false
 */
import { deepEqual } from 'node:assert';
import { describe, it } from 'node:test';

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

describe('Generate Sentence', () => {
  it('should return correct results', () => {
    const scenarios = [
      ["Bstesi Tt!eh rella ", "Taller is the Best!", true],
      ["eeellllrrrrTTTTttttaaAAAEEEEeeeessss", "Taller", true],
      ["loheeeehhhoooo", "hello", false],
      ["ABCDEF", "ABCDEF", true],
      ["ABCDEF", "XYZ", false],
      ["", "Hello", false],
      ["Hello", "", true],
    ]
    for (const [characters, sentence, expected] of scenarios) {
      deepEqual(solution1(characters, sentence), expected);
    }
  });
});
