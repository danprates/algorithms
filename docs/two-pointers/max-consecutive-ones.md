# Max Consecutive Ones

- **Difficulty**: Medium

## Problem

Given an array of integers containing only `0`s and `1`s, you may change up to `k` values from `0` to `1`.

Find the maximum length of a sequence of consecutive `1`s that can be achieved after the allowed changes.

### Example

```js
solution1([0, 0, 0, 0, 1, 1, 1, 1], 3) -> 7
solution1([1, 0, 1, 1, 0, 1], 1) -> 4
```

## Solution

### Strategy

The problem can be efficiently solved using a sliding window approach:

1. Use two pointers, `left` and `right`, to maintain the boundaries of the window.
2. Expand the `right` pointer while iterating through the array.
3. If the value at `numbers[right]` is `0`, decrement `k`.
4. If `k` becomes negative (too many `0`s converted), increment the `left` pointer until `k` is non-negative.
5. The maximum length of the window (`right - left`) during the iteration represents the result.

This approach ensures linear time complexity, as each pointer traverses the array only once.

### Complexity

- **Time Complexity**: \(O(n)\) — The array is traversed once.
- **Space Complexity**: \(O(1)\) — No additional space is used.

### Code

```js
function solution1(numbers, k) {
  let left = 0;
  let right = 0;

  while (right < numbers.length) {
    if (numbers[right] === 0) k--;

    if (k < 0) {
      if (numbers[left] === 0) k++;
      left++;
    }
    right++;
  }

  return right - left;
}
```

## Test

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

describe("Max Consecutive Ones", () => {
  it("should return correct results", () => {
    const scenarios = [
      [[0, 0, 0, 0, 1, 1, 1, 1], 3, 7],
      [[1, 0, 1, 1, 0, 1], 1, 4],
      [[0, 0, 1, 1, 0, 1, 1, 1], 2, 7],
      [[1, 1, 1, 1], 1, 4],
      [[0, 0, 0], 1, 1],
      [[], 5, 0],
    ];

    for (const [numbers, k, expected] of scenarios) {
      deepEqual(solution1(numbers, k), expected);
    }
  });
});
```
