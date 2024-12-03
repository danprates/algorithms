# Valid Palindrome

- **Difficulty**: Easy

## Problem

Write a function to determine if a given string is a valid palindrome.

A string is considered a valid palindrome if it reads the same backward as forward, ignoring non-alphanumeric characters and case differences.

### Example

```js
solution1("level") -> true
solution2("A man, a plan, a canal: Panama") -> true
solution2("race a car") -> false
```

If the input string is empty, it should be considered a valid palindrome.

---

## Solutions

### Reverse String Approach (Solution 1)

#### Strategy

1. Remove all non-alphanumeric characters from the string and convert it to lowercase.
2. Reverse the cleaned string and compare it with the original cleaned string.
3. If they match, return `true`; otherwise, return `false`.

#### Complexity

- **Time**: \(O(n)\) – Cleaning and reversing the string both require linear time.
- **Space**: \(O(n)\) – The reversed string requires additional memory.

#### Code

```js
function solution1(str) {
  str = str.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result === str;
}
```

---

### Two-Pointer Approach (Solution 2)

#### Strategy

1. Remove all non-alphanumeric characters from the string and convert it to lowercase.
2. Use two pointers:
   - One starting from the beginning of the string.
   - The other starting from the end of the string.
3. Compare characters at the two pointers. If they do not match, return `false`.
4. Move the pointers inward and repeat until they meet or cross each other.
5. If all characters match, return `true`.

#### Complexity

- **Time**: \(O(n)\) – Cleaning and traversing the string require linear time.
- **Space**: \(O(1)\) – The two-pointer method does not use additional memory.

#### Code

```js
function solution2(str) {
  str = str.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }
  return true;
}
```

---

## Tests

### Test Cases

```js
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

describe("Valid Palindrome", () => {
  it("should return correct values", () => {
    const scenarios = [
      ["level", true],
      ["A man, a plan, a canal: Panama", true],
      ["race a car", false],
      ["detartrated", true],
      ["", true],
      ["PP", true],
      ["0P", false],
      ["was it a car or a cat I saw", true],
      ["not a palindrome", false],
    ];

    for (const [str, expected] of scenarios) {
      deepEqual(solution1(str), expected);
      deepEqual(solution2(str), expected);
    }
  });
});
```
