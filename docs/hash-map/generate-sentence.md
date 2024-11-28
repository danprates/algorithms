# Generate Sentence

- **Difficulty**: Medium

## Problem

Write a function to determine if you can construct a sentence using the characters available in a given string. Each character in the source string can only be used as many times as it appears. The function should return `true` if the sentence can be generated, and `false` otherwise.

The solution must have a time complexity of **O(n + m)**, where:
- `n` is the length of the source string (characters available).
- `m` is the length of the sentence to be generated.

## Examples

```js
solution1("leeehhhoooo", "hello") -> false
solution1("ABCDEF", "ABCDEF") -> true
solution1("Bstesi Tt!eh rella ", "Taller is the Best!") -> true
solution1("ABCDEF", "XYZ") -> false
solution1("", "Hello") -> false
solution1("Hello", "") -> true
```

## Solution

### Strategy

1. Create a frequency map of the characters available in the source string.
2. Iterate over each character in the target sentence and check if:
   - The character exists in the frequency map.
   - There are enough occurrences of the character in the map to match the requirement.
3. If a character is not available or insufficient, return `false`.
4. If all characters in the sentence are accounted for, return `true`.

### Complexity

- **Time Complexity**:
  - **O(n)** to build the frequency map for the source string.
  - **O(m)** to check the characters in the sentence.
  - Total: **O(n + m)**.
- **Space Complexity**: **O(1)** since the frequency map is bounded by the size of the character set.

### Code

```js
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
};
```

## Tests

```js
import { deepEqual } from 'node:assert';
import { describe, it } from 'node:test';

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
    ];
    for (const [characters, sentence, expected] of scenarios) {
      deepEqual(solution1(characters, sentence), expected);
    }
  });
});
```
