# Sorted Squared

- **Difficulty**: Easy

## Problem

Given a non-empty array of integers (including both negative and positive numbers) sorted in ascending order, return a new array of the same length with the squares of the original integers, also sorted in ascending order.

The solution must achieve both time and space complexity of \(O(n)\).

### Example

```js
sortedSquared([1, 2, 3, 5, 6, 8, 9]) -> [1, 4, 9, 25, 36, 64, 81]
sortedSquared([-4, -3, -2, 0, 1, 5, 10]) -> [0, 1, 4, 9, 16, 25, 100]
```

## Solution

### Strategy

To achieve \(O(n)\) complexity, the solution uses a two-pointer approach:

1. Initialize two pointers, `left` starting at the beginning of the array and `right` at the end.
2. Compare the squares of the values at the `left` and `right` pointers.
3. Insert the larger square at the current position in the output array (starting from the last index).
4. Move the respective pointer inward (increment `left` or decrement `right`).
5. Repeat until the entire array is processed.

This approach avoids sorting after squaring, ensuring optimal performance.

### Complexity

- **Time Complexity**: \(O(n)\) — Each element is processed exactly once.
- **Space Complexity**: \(O(n)\) — The result array requires additional space.

### Code

```js
const solution1 = (arr) => {
  const n = arr.length;
  const result = new Array(n);
  let left = 0;
  let right = n - 1;
  let i = n - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left];
    const rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      result[i] = leftSquare;
      left++;
    } else {
      result[i] = rightSquare;
      right--;
    }

    i--;
  }

  return result;
};
```

## Test

```js
import { deepEqual } from 'node:assert';
import { describe, it } from 'node:test';

describe('Sorted Squared', () => {
  it('should return correct results', () => {
    const scenarios = [
      [[1, 2, 3, 5, 6, 8, 9], [1, 4, 9, 25, 36, 64, 81]],
      [[-4, -3, -2, 0, 1, 5, 10], [0, 1, 4, 9, 16, 25, 100]],
      [[-9, -7, -5, -3, -1], [1, 9, 25, 49, 81]],
      [[2], [4]],
      [[-3, -2, -1], [1, 4, 9]],
      [[0, 1, 2, 3], [0, 1, 4, 9]],
      [[], []],
    ];

    for (const [input, expected] of scenarios) {
      deepEqual(solution1(input), expected);
    }
  });
});
```
