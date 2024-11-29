# Winning Card

- **Difficulty**: Medium

## Problem

Given an array of card numbers that have been drawn, an array of cards in your hand, and a bonus card, find the highest card number in your hand that appears only once in the combined set of cards.
If there are no cards in your hand that appear only once, return -1.

### Example

```js
solution1([
  [1, 2, 3, 4, 7, 8, 9, 5, 9], // drawn cards
  [1, 2, 3], // cards in hand
  [1, 1], // bonus cards (optional)
]) -> 8
```

## Solution

### Strategy

1. **Flatten Input**: Combine all provided card arrays into a single array.
1. **Count Frequencies**: Use a map to store the count of each card.
1. **Identify Unique Cards**: Traverse the card set to find cards that appear only once.
1. **Find Maximum**: Track the maximum value among unique cards in the hand.
1. **Return Result**: If no unique cards exist, return `-1`.

### Complexity

- **Time Complexity**: O(n + m), where `n` is the total number of cards and `m` is the number of unique cards.
- **Space Complexity**: O(n), to store the card counts in a map.

### Code

```js
function solution1(cards) {
  const allCards = cards.flat();
  const cardCounts = new Map();

  for (const card of allCards) {
    cardCounts.set(card, (cardCounts.get(card) || 0) + 1);
  }

  let maxCard = -1;
  for (const card of allCards) {
    if (cardCounts.get(card) === 1) {
      maxCard = Math.max(maxCard, card);
    }
  }

  return maxCard;
}
```

## Test

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

describe("Winning Card", () => {
  it("should return correct results", () => {
    deepEqual(
      solution1([
        [1, 2, 3, 4, 7, 8, 9, 5, 9], // drawn cards
        [1, 2, 3], // cards in hand
        [1, 1], // bonus cards
      ]),
      8
    );
    deepEqual(
      solution1([
        [5, 5, 5],
        [1, 2, 3],
        [1, 2, 3],
      ]),
      -1
    );
    deepEqual(solution1([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [6]]), 6);
    deepEqual(
      solution1([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10],
      ]),
      10
    );
  });
});
```
