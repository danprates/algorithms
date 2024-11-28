# Split String

- **Difficulty**: Easy

## Problem

Write a function that takes two arguments, the first one being a String and the second one being an unordered list of words.

The function should determine if the first argument can be partitioned into one or more existing words from the list of words provided in the second argument.

The response should be either YES or NO, where YES indicates that the first argument can be partitioned and NO indicates that it is not possible.

It should be considered YES only if the partitioning result is complete, meaning that no characters are left over.

```js
solution1("julio", ["julio"]) -> 'YES'
solution1("julio", ["julio", "julio"]) -> 'NO'
```

## Solution

### Strategy

1. Create a copy of the input string.
2. For each word in the dictionary, remove the word from the copy of the input string.
3. If the copy of the input string is empty, return YES.
4. Otherwise, return NO.

### Code

```js
function solution1(input, dictionary) {
  for (const name of dictionary) {
    input = input.replace(name, "");
  }
  return input.length == 0 ? "YES" : "NO";
}
```

## Test

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

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
```
