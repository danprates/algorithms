# Gas Station

- **Difficulty**: Hard

## Problem

Write a function that takes an array of strings. The first element of the array represents the number of gas stations `N` along a circular route. Each subsequent element in the array is a string formatted as `"X:Y"`, where `X` is the amount of gas available at a station, and `Y` is the amount of gas needed to reach the next station.

The function should determine the starting gas station (1-indexed) from which a complete circuit can be made. If no such starting station exists, return the string `"Impossible"`.

If there are multiple valid starting stations, the solution should return the earliest one.

## Example

```js
solution1(["4", "3:1", "2:2", "1:2", "0:1"]) -> "1"
solution1(["4", "1:1", "2:2", "1:2", "0:1"]) -> "Impossible"
```

## Strategy

1. Parse the first element to determine the number of gas stations `N`.
2. Convert each `"X:Y"` entry to a pair of numbers `[gas, cost]`.
3. Maintain two variables:
   - `totalFuel`: Tracks the total fuel balance to determine if completing the circuit is possible.
   - `currentFuel`: Tracks the fuel balance for the current segment of the journey.
4. If `currentFuel` becomes negative, reset `currentFuel` to `0` and set the starting index to the next station.
5. If `totalFuel` is negative after iterating all stations, return `"Impossible"`.
6. Otherwise, return the calculated starting index as a string.

### Complexity

- **Time Complexity**: `O(n)`, where `n` is the number of gas stations.
- **Space Complexity**: `O(1)`, as only a constant amount of extra space is used.

## Code

```js
function solution1(strArr) {
  const n = parseInt(strArr[0]);
  const stations = strArr.slice(1).map((entry) => entry.split(":").map(Number));

  let totalFuel = 0;
  let currentFuel = 0;
  let startIndex = 1;

  for (let i = 0; i < n; i++) {
    const [gas, cost] = stations[i];
    totalFuel += gas - cost;
    currentFuel += gas - cost;

    if (currentFuel < 0) {
      startIndex = (i + 1) % stations.length;
      currentFuel = 0;
    }
  }

  if (totalFuel < 0) {
    return "Impossible";
  }

  return startIndex.toString();
}
```

## Test

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

describe("Gas Station", () => {
  it("should return correct results", () => {
    const scenarios = [
      [["4", "3:1", "2:2", "1:2", "0:1"], "1"],
      [["4", "1:1", "2:2", "1:2", "0:1"], "Impossible"],
      [["4", "1:2", "4:1", "2:2", "1:1"], "1"],
      [["4", "1:3", "1:2", "5:1", "2:2"], "2"],
      [["4", "2:3", "1:2", "1:3", "5:1"], "3"],
    ];

    for (const [input, expected] of scenarios) {
      deepEqual(solution1(input), expected);
    }
  });
});
```
