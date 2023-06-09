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
 * @example
 * solution1("julio", ["julio"]) -> 'YES'
*/

const { deepEqual } = require('assert');

/**
 * Time: O(n * m)
 * Space: O(1)
 * @param {string} input
 * @param {string[]} dictionary
 * @returns {string}
 */
function solution1(input, dictionary) {
  for (const name of dictionary) {
    if (input.includes(name)) {
      input = input.replace(name, "");
    }
  }
  return input.length == 0 ? "YES" : "NO";
}

module.exports = () => {
  // should return correct results
  {
    const dictionary = ["julio", "eduardo", "martins", "victor", "santos"];

    deepEqual(solution1("julioeduardo", dictionary), 'YES');
    deepEqual(solution1("julio", dictionary), 'YES');
    deepEqual(solution1("julioeduardoma", dictionary), 'NO');
    deepEqual(solution1("victor", dictionary), 'YES');
    deepEqual(solution1("vic", dictionary), 'NO');
    deepEqual(solution1("victorsantos1", dictionary), 'NO');
    deepEqual(solution1("victorsantos", dictionary), 'YES');
  }
};
