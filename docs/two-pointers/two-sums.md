# Two Sum

- **Difficulty**: Easy

## Problem

Write a function that, given an array of integers and a target value, finds two numbers that sum to the target value. The function should return the pair of numbers.

### Example

```js
solution1(9, [4, 1, 2, -2, 11, 16, 1, -1, -6, -4]) -> [-2, 11]
solution2(9, [4, 1, 2, -2, 11, 16, 1, -1, -6, -4]) -> [-2, 11]
solution3(9, [4, 1, 2, -2, 11, 16, 1, -1, -6, -4]) -> [-2, 11]
```

If no valid pair exists, return an empty array `[]`.

---

## Solutions

### Brute-Force Approach (Solution 1)

#### Strategy

1. Use two nested loops to iterate over all possible pairs of numbers in the array.
2. Check if the sum of the current pair matches the target value.
3. Return the pair if found.

#### Complexity

- **Time**: \(O(n^2)\) – Iterates through all pairs of numbers.
- **Space**: \(O(1)\) – No additional storage is used.

#### Code

```js
function solution1(target, numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (sum === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return [];
}
```

---

### Hash Map Approach (Solution 2)

#### Strategy

1. Use a hash map to store the difference between the target and the current number as a key.
2. For each number, check if its complement (target - current number) exists in the hash map.
3. If found, return the pair of numbers.

#### Complexity

- **Time**: \(O(n)\) – Each number is processed in constant time.
- **Space**: \(O(n)\) – The hash map stores up to \(n\) entries.

#### Code

```js
function solution2(target, numbers) {
  const calculated = new Map();

  for (let n of numbers) {
    const calc = target - n;

    if (calculated.has(calc)) {
      return [calc, n];
    }

    calculated.set(n, true);
  }

  return [];
}
```

---

### Two-Pointer Approach (Solution 3)

#### Strategy

1. Sort the input array to enable two-pointer traversal.
2. Use two pointers (`left` and `right`) to find the sum of numbers at each end of the array.
3. Adjust the pointers based on the sum comparison:
   - Move the left pointer to increase the sum.
   - Move the right pointer to decrease the sum.
4. Return the pair if the target is matched.

#### Complexity

- **Time**: \(O(n \log n)\) – Sorting the array dominates the runtime.
- **Space**: \(O(1)\) – No additional storage aside from the result.

#### Code

```js
function solution3(target, numbers) {
  numbers.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    const sum = numbers[leftPointer] + numbers[rightPointer];

    if (sum === target) {
      return [numbers[leftPointer], numbers[rightPointer]];
    } else if (sum < target) {
      leftPointer += 1;
    } else if (sum > target) {
      rightPointer -= 1;
    }
  }

  return [];
}
```

---

## Tests

### Test Cases

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

describe("Two Sum", () => {
  it("should return correct pairs", () => {
    deepEqual(solution1(9, [4, 1, 2, -2, 11, 16, 1, -1, -6, -4]), [-2, 11]);
    deepEqual(solution2(9, [4, 1, 2, -2, 11, 16, 1, -1, -6, -4]), [-2, 11]);
    deepEqual(solution3(9, [4, 1, 2, -2, 11, 16, 1, -1, -6, -4]), [-2, 11]);

    deepEqual(solution1(5, [1, 2, 3, 4]), [1, 4]);
    deepEqual(solution2(5, [1, 2, 3, 4]), [2, 3]);
    deepEqual(solution3(5, [1, 2, 3, 4]), [1, 4]);

    deepEqual(solution1(-5, [-1, -2, -3, -4, -5]), [-1, -4]);
    deepEqual(solution2(-5, [-1, -2, -3, -4, -5]), [-2, -3]);
    deepEqual(solution3(-5, [-1, -2, -3, -4, -5]), [-4, -1]);

    deepEqual(solution1(6, [3, 3]), [3, 3]);
    deepEqual(solution2(6, [3, 3]), [3, 3]);
    deepEqual(solution3(6, [3, 3]), [3, 3]);
  });

  it("should return an empty array if no pair is found", () => {
    const scenarios = [
      { target: 8, numbers: [1, 2, 3, 4], expected: [] },
      { target: 0, numbers: [1, 2, 3, 4], expected: [] },
      { target: 10, numbers: [-1, -2, -3, -4], expected: [] },
    ];
    scenarios.forEach(({ target, numbers, expected }) => {
      deepEqual(solution1(target, numbers), expected);
      deepEqual(solution2(target, numbers), expected);
      deepEqual(solution3(target, numbers), expected);
    });
  });

  it("should handle edge cases", () => {
    const scenarios = [
      { target: 0, numbers: [], expected: [] },
      { target: 5, numbers: [5], expected: [] },
      { target: 0, numbers: [0, 0, 0], expected: [0, 0] },
      { target: 1, numbers: [1, 1], expected: [] },
      { target: -1, numbers: [1, 1], expected: [] },
    ];
    scenarios.forEach(({ target, numbers, expected }) => {
      deepEqual(solution1(target, numbers), expected);
      deepEqual(solution2(target, numbers), expected);
      deepEqual(solution3(target, numbers), expected);
    });
  });
});
```
