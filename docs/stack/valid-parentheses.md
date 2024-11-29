# Valid Parentheses

- **Difficulty**: Easy

## Problem

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

### Example

```js
solution1('()') -> true
```

For the input `'()'`, the parentheses are balanced and properly nested, so the result is `true`.

## Solution

### Strategy

1. **Odd Length Check**: If the string's length is odd, return `false` immediately, as it can't be balanced.
2. **Stack for Matching Brackets**: Use a stack to keep track of the opening brackets.
3. **Bracket Pair Matching**: For each closing bracket, check if it matches the latest opening bracket from the stack.
4. **Final Check**: If the stack is empty after processing the entire string, it means all brackets are properly matched and closed. Otherwise, the string is invalid.

### Time Complexity
- **Time Complexity**: O(n), where `n` is the length of the input string. The string is traversed once, and each character is either pushed to or popped from the stack.
- **Space Complexity**: O(n), since in the worst case, the stack could store all opening brackets.

### Code

```js
function solution1(str) {
  if (str.length % 2 !== 0) return false;

  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const s of str) {
    if (map[s] && map[s] === stack.pop()) {
      continue;
    }
    stack.push(s);
  }

  return stack.length === 0;
}
```

## Test

```js
import { deepEqual } from "node:assert";
import { describe, test } from "node:test";

describe("Valid Parentheses", () => {
  test("should return correct values", () => {
    const scenarios = [
      ["()", true],
      ["([{}])", true],
      ["()[]{}", true],
      ["(]", false],
      ["([)]", false],
      ["{[()]}", true],
      ["", true],
      ["((", false],
      ["))", false],
      ["[{}]", true],
    ];

    for (const [str, expected] of scenarios) {
      deepEqual(solution1(str), expected);
    }
  });
});
```
