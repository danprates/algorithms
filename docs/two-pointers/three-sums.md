# Three Sums

- **Difficulty**: Easy

## Problem

Write a function that, given an array of integers and a target sum, finds all unique triplets of numbers that add up to the target sum. The solution must not include duplicate triplets, even if the input contains repeated numbers.

### Example

```js
solution1([12, 3, 1, 2, -6, 5, -8, 6], 0) -> [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
solution2([12, 3, 1, 2, -6, 5, -8, 6], 0) -> [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
```

## Solutions

### Brute-Force Approach (Solution 1)

#### Strategy

1. Iterate through all combinations of three elements in the input array.
2. Check if their sum matches the target value.
3. Sort each valid triplet to ensure consistency.
4. Append the triplet to the result list if valid.

#### Complexity

- **Time**: \(O(n^3)\) – Iterates through all combinations of three numbers.
- **Space**: \(O(1)\) – No additional storage aside from the result.

#### Code

```js
function solution1(numbers, target) {
  const result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    const first = numbers[i];
    for (let j = i + 1; j < numbers.length - 1; j++) {
      const second = numbers[j];
      for (let k = j + 1; k < numbers.length; k++) {
        const third = numbers[k];
        if (first + second + third === target) {
          result.push([first, second, third].sort((a, b) => a - b));
        }
      }
    }
  }

  return result;
}
```

---

### Optimized Two-Pointer Approach (Solution 2)

#### Strategy

1. Sort the input array to enable the use of two pointers.
2. Fix one element as the current candidate and use two pointers (`left` and `right`) to find pairs summing to the target minus the fixed element.
3. Adjust the pointers based on the sum comparison:
   - Move the left pointer to increase the sum.
   - Move the right pointer to decrease the sum.
4. Append unique triplets to the result.

#### Complexity

- **Time**: \(O(n^2)\) – Sorts the array and performs two-pointer traversal.
- **Space**: \(O(n)\) – Sorting the input.

#### Code

```js
function solution2(numbers, target) {
  const result = [];
  numbers.sort((a, b) => a - b);

  for (let current = 0; current < numbers.length; current++) {
    let left = current + 1;
    let right = numbers.length - 1;

    while (left < right) {
      let sum = numbers[current] + numbers[left] + numbers[right];

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        result.push([numbers[current], numbers[left], numbers[right]]);
        left++;
        right--;
      }
    }
  }

  return result;
}
```

---

## Tests

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

describe("Three Sums", () => {
  it("should return correct values", () => {
    deepEqual(solution1([12, 3, 1, 2, -6, 5, -8, 6], 0), [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
    deepEqual(solution1([0, 0, 0], 0), [[0, 0, 0]]);
    deepEqual(solution1([1, 2, 3, 4, 5], 9), [
      [1, 3, 5],
      [2, 3, 4],
    ]);
    deepEqual(solution1([1, 2, 3, 4, 5], 100), []);
    deepEqual(solution1([], 5), []);
    deepEqual(solution1([1], 1), []);

    deepEqual(solution2([12, 3, 1, 2, -6, 5, -8, 6], 0), [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
    deepEqual(solution2([0, 0, 0], 0), [[0, 0, 0]]);
    deepEqual(solution2([1, 2, 3, 4, 5], 9), [
      [1, 3, 5],
      [2, 3, 4],
    ]);
    deepEqual(solution2([1, 2, 3, 4, 5], 100), []);
    deepEqual(solution2([], 5), []);
    deepEqual(solution2([1], 1), []);
  });
});
```
