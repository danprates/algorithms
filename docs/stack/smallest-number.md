# Smallest Positive Integer Not in Array

- **Difficulty**: Easy

## Problem

Write a function that takes an array `A` of `N` integers. The function should return the smallest positive integer (greater than 0) that does not appear in the array.

### Example

```js
solution1([1, 3, 6, 4, 1, 2]) -> 5
```

## Solution 1: Using a Set to Track Positive Numbers

### Strategy

1. Store all unique elements of the array in a `Set` for fast lookup.
2. Initialize a variable `smallest` with the value `1`.
3. Increment `smallest` until it finds a value that is not in the `Set`.
4. Return `smallest`.

### Complexity

- **Time Complexity**: `O(n)`, where `n` is the number of elements in the array.
- **Space Complexity**: `O(n)`, because we use a `Set` to store the unique elements.

### Code

```js
function solution1(A) {
  const positiveNums = new Set(A);

  let smallest = 1;

  while (positiveNums.has(smallest)) {
    smallest++;
  }

  return smallest;
}
```

## Test

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

describe("Smallest Number", () => {
  it("should return correct results", () => {
    const scenarios = [
      [[1, 3, 6, 4, 1, 2], 5],
      [[2, 2, -3, 4, 5, 6], 1],
      [[1, 2, 3, -4, 5, 6], 4],
      [[1, 2, 3, 4, 5, 6], 7],
    ];

    for (const [input, expected] of scenarios) {
      deepEqual(solution1(input), expected);
    }
  });
});
```
