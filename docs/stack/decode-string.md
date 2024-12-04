# Decode String

- **Difficulty**: Medium

## Problem

Write a function that decodes an encoded string based on the following encoding rule:
`k[encoded_string]`, where the `encoded_string` inside the square brackets is repeated exactly `k` times.

- The input string is always valid, meaning no extra spaces, and the brackets are well-formed.
- The original data does not contain digits; digits only appear as part of the encoding.

### Examples

```js
solution1("2[abc]3[cd]ef") -> "abcabccdcdcdef"
solution2("a2[b3[c]]d") -> "abcccbcccd"
```

## Solution

### Strategy

1. Use a stack to parse the input string.
2. Iterate over the characters in the string:
   - Push characters onto the stack until encountering `]`.
   - When `]` is encountered:
     - Extract the `encoded_string` by popping characters until `[` is found.
     - Extract the repeat count `k` by popping numeric characters.
     - Repeat the `encoded_string` `k` times and push the result back onto the stack.
3. Combine the stack contents to form the final decoded string.

### Complexity

- **Time**: \(O(n)\), where \(n\) is the length of the input string, as each character is processed once.
- **Space**: \(O(n)\), for the stack used during decoding.

### Code

#### Solution 1

```js
function solution1(str) {
  const stack = [];
  let temp = "";
  let number = 0;

  for (const s of str) {
    if (s === "[") {
      if (temp) {
        stack.push(temp);
        temp = "";
      }
      stack.push(number);
      number = 0;
    } else if (s === "]") {
      if (temp) {
        stack.push(temp);
        temp = "";
      }
      let first = stack.pop();
      let newStr = "";

      while (!Number.isInteger(first)) {
        newStr = first + newStr;
        first = stack.pop();
      }

      newStr = newStr.repeat(first);
      stack.push(newStr);
    } else {
      if (s.match(/^\d+$/)) {
        number = number * 10 + parseInt(s);
      } else {
        temp += s;
      }
    }
  }

  if (temp) {
    stack.push(temp);
  }
  return stack.join("");
}
```

#### Solution 2

```js
function solution2(str) {
  const stack = [];

  for (let char of str) {
    if (char !== "]") {
      stack.push(char);
    } else {
      // Extract encoded substring
      let substr = "";
      while (stack[stack.length - 1] !== "[") {
        substr = stack.pop() + substr;
      }

      // Remove opening bracket
      stack.pop();

      // Extract repeat count
      let k = "";
      while (stack.length && !isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }

      // Repeat and push back to stack
      stack.push(substr.repeat(parseInt(k)));
    }
  }

  return stack.join("");
}
```

## Test

```js
import { deepEqual } from "node:assert";
import { describe, test } from "node:test";

describe("Decode String", () => {
  test("should return correct values", () => {
    const scenarios = [
      ["abc", "abc"],
      ["ab2[c]", "abcc"],
      ["a3[b]", "abbb"],
      ["2[abc]3[cd]ef", "abcabccdcdcdef"],
      ["a2[b3[c]]d", "abcccbcccd"],
    ];

    for (const [str, expected] of scenarios) {
      deepEqual(solution1(str), expected);
      deepEqual(solution2(str), expected);
    }
  });
});
```
