# Find First Non-Repeating Character Index

- **Difficulty**: Easy

## Problem

Write a function that returns the index of the first non-repeating character in a string. A character is considered "non-repeating" if it appears exactly once in the string. If no such character exists, the function should return `-1`.

The solution must have a time complexity of **O(n)**.

### Example

```js
solution1("abcdcaf") -> 1
solution1("aabbcc") -> -1
solution1("abcde") -> 0
solution1("") -> -1
```

## Solution

### Strategy

1. Use a `Map` to count the frequency of each character in the input string.
   - Iterate over the string, incrementing the count for each character in the map.
2. Iterate over the string again, checking for the first character with a frequency of 1 in the map.
3. Return the index of the first non-repeating character, or `-1` if none exist.

### Code

```js
/**
 * Time: O(n)
 * Space: O(n)
 * @param {string} word
 * @returns {number}
 */
const solution1 = (word) => {
  const charCounts = new Map();

  // Count the frequency of each character
  for (const char of word) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  // Find the first non-repeating character
  for (let i = 0; i < word.length; i++) {
    if (charCounts.get(word[i]) === 1) {
      return i;
    }
  }

  return -1;
};
```

## Test

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

describe("Find first non-repeating character index", () => {
  it("should return correct results", () => {
    const scenarios = [
      ["abcdcaf", 1], // 'b' is the first non-repeating character at index 1
      ["aabbcc", -1], // No non-repeating characters
      ["abcde", 0],   // 'a' is the first non-repeating character at index 0
      ["", -1],       // Empty string, no characters
    ];

    for (const [word, expectedResult] of scenarios) {
      deepEqual(solution1(word), expectedResult);
    }
  });
});
```
