# Sqrt(x)

- **Difficulty**: Easy

## Problem

Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator (e.g. `Math.pow(x, 0.5)` or `x ** 0.5`).

### Example

```js
solution1(4) -> 2
solution1(8) -> 2 // the square root of 8 is 2.82842..., rounded down to 2
solution2(4) -> 2
solution2(8) -> 2
```

---

## Solutions

### Brute-Force Approach (Solution 1)

#### Strategy

1. Initialize `res` with `0`.
2. Iterate `i` from `1` while `i * i <= x`, storing `i` in `res` on each step.
3. Return `res`, the last `i` whose square does not exceed `x`.

#### Complexity

- **Time**: \(O(\sqrt{x})\) – The loop stops once `i * i` exceeds `x`.
- **Space**: \(O(1)\) – Only a few variables are used.

#### Code

```js
function solution1(x) {
  let res = 0;

  for (let i = 1; i * i <= x; i++) {
    res = i;
  }

  return res;
}
```

---

### Binary Search Approach (Solution 2)

#### Strategy

1. Search for the answer in the range `[0, x]` using two pointers (`left` and `right`).
2. Compute the middle value `mid` and compare `mid * mid` with `x`:
   - If `mid * mid <= x`, `mid` is a candidate: store it in `res` and search the right half.
   - Otherwise, search the left half.
3. Return `res` when the pointers cross.

#### Complexity

- **Time**: \(O(\log x)\) – The search range is halved on each step.
- **Space**: \(O(1)\) – Only a few variables are used.

#### Code

```js
function solution2(x) {
  let left = 0;
  let right = x;
  let res = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid <= x) {
      res = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}
```

---

## Tests

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

describe("Sqrt(x)", () => {
  it("should return correct results", () => {
    const scenarios = [
      [0, 0],
      [1, 1],
      [2, 1],
      [4, 2],
      [8, 2],
      [9, 3],
      [15, 3],
      [16, 4],
      [2147483647, 46340],
    ];

    for (const [input, expected] of scenarios) {
      deepEqual(solution1(input), expected);
      deepEqual(solution2(input), expected);
    }
  });
});
```
