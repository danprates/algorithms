# Longest Substring Without Repeating Characters

- **Difficulty**: Medium

## Problem

Given a string, find the length of the longest substring that does not contain repeating characters.

### Example

```js
solution1('abcabcbb') -> 3
```

For the input `'abcabcbb'`, the longest substring without repeating characters is `"abc"`, which has a length of 3.

## Solution

### Strategy

1. **Sliding Window**: Use a sliding window technique with two pointers (`left` and `right`) to explore substrings.
2. **Track Characters**: Maintain a set (`hash`) to track unique characters in the current window.
3. **Expand Window**: Move the `right` pointer to expand the window until a repeating character is found.
4. **Shrink Window**: If a repeat character is found, move the `left` pointer to shrink the window and remove the repeated character.
5. **Update Maximum**: At each step, update the maximum length of the window.

### Time Complexity
- **Time Complexity**: O(n), where `n` is the length of the input string. Both `left` and `right` pointers traverse the string once.
- **Space Complexity**: O(1), since the set only stores unique characters within the sliding window, and the size of the set will never exceed the number of unique characters in the string (which is constant at most 26 for lowercase English letters).

### Code

```js
function solution1(str) {
  let right = 0;
  let left = 0;
  let max = 0;
  const hash = new Set();

  while (right < str.length) {
    const char = str.at(right);
    if (hash.has(char)) {
      hash.delete(str.at(left));
      left++;
    } else {
      hash.add(char);
      right++;
      max = Math.max(hash.size, max);
    }
  }

  return max;
}
```

## Test

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

describe("Longest Substring Without Repeating Characters", () => {
  it("should return correct results", () => {
    const scenarios = [
      ["abcabcbb", 3],
      ["abccbad", 4],
      ["pwwkew", 3],
      ["bbbbb", 1],
      ["", 0],
      ["abcdefghijklmnopqrstuvwxyz", 26],
      ["abba", 2],
      ["aab", 2],
    ];

    for (const [input, expected] of scenarios) {
      deepEqual(solution1(input), expected);
    }
  });
});
```
