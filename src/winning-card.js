/**
 * Winning Card
 * Given an array of card numbers that have been drawn,
 * an array of cards in your hand, and a bonus card,
 * find the highest card number in your hand that
 * appears only once in the combined set of cards.
 * If there are no cards in your hand that appear only once, return -1.
 *
 * @example
 * solution([[1, 2, 3, 4, 7, 8, 9, 5, 9], [1, 2, 3], [1, 1]]) -> 8
 */
const { deepEqual } = require('assert');

/**
 * Time: O(n + m)
 * Space: O(n + m)
 * @param {number[][]} cards
 * @returns {number}
 */
function solution1(cards) {
  const allCards = cards.flat();
  const cardCounts = new Map();

  for (const card of allCards) {
    cardCounts.set(card, (cardCounts.get(card) || 0) + 1);
  }

  let maxCard = -1;
  for (const card of allCards) {
    if (cardCounts.get(card) === 1 && card > maxCard) {
      maxCard = card;
    }
  }

  return maxCard;
}

module.exports = () => {
  // should return correct results
  {
    deepEqual(solution1([[1, 2, 3, 4, 7, 8, 9, 5, 9], [1, 2, 3], [1, 1]]), 8);
    deepEqual(solution1([[5, 5, 5], [1, 2, 3], [1, 2, 3]]), -1);
    deepEqual(solution1([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [6]]), 6);
    deepEqual(solution1([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]]), 10);
  }
}
