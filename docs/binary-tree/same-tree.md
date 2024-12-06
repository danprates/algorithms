# Same Tree

- **Difficulty**: Easy

## Problem

Write a function to determine if two binary trees are the same.

Two binary trees are considered the same if:

1. They are structurally identical.
1. The values of corresponding nodes are equal.

### Example

```js
solution1(p, q); // Returns true if `p` and `q` are the same trees
```

## Solution

### Strategy 1: Depth-First Search (DFS)

1. Compare the roots of the two trees:
   - If both are `null`, return `true`.
   - If only one is `null`, return `false`.
   - If both are not `null`, compare their values.
2. Recursively compare the left and right subtrees using DFS.
3. If all checks pass, return `true`. Otherwise, return `false`.

### Complexity

- **Time Complexity**: `O(n)`, where `n` is the number of nodes in the smaller tree.
- **Space Complexity**: `O(h)`, where `h` is the height of the tree (recursion stack).

### Code

```js
function solution1(p, q) {
  if (!p || !q) {
    return p === q;
  }

  if (p.val === q.val) {
    return solution1(p.left, q.left) && solution1(p.right, q.right);
  }

  return false;
}
```

---

### Strategy 2: Breadth-First Search (BFS)

1. Use a queue to compare nodes level by level.
2. At each step:
   - Remove two nodes from the queue.
   - If both are `null`, continue.
   - If only one is `null` or their values are different, return `false`.
   - Add their left and right children to the queue for further comparison.
3. If the queue is exhausted without mismatches, return `true`.

### Complexity

- **Time Complexity**: `O(n)`, where `n` is the number of nodes in the smaller tree.
- **Space Complexity**: `O(w)`, where `w` is the maximum width of the tree.

### Code

```js
function solution2(p, q) {
  const queue = [p, q];

  while (queue.length) {
    const t1 = queue.shift();
    const t2 = queue.shift();

    if (!t1 || !t2) {
      return t1 === t2;
    }

    if (t1.val !== t2.val) {
      return false;
    }

    queue.push(t1.left);
    queue.push(t2.left);
    queue.push(t1.right);
    queue.push(t2.right);
  }

  return true;
}
```

---

## Test

### Scenarios

```js
import { deepEqual } from "node:assert";
import { describe, test } from "node:test";

describe("Same Tree", () => {
  test("should return correct values", () => {
    const scenarios = [
      [
        {
          val: 1,
          left: {
            val: 2,
            left: { val: 3, left: null, right: null },
            right: { val: 4, left: null, right: null },
          },
          right: {
            val: 5,
            left: { val: 6, left: null, right: null },
            right: null,
          },
        },
        {
          val: 1,
          left: {
            val: 2,
            left: { val: 3, left: null, right: null },
            right: { val: 4, left: null, right: null },
          },
          right: {
            val: 5,
            left: { val: 6, left: null, right: null },
            right: null,
          },
        },
        true,
      ],
      [
        {
          val: 1,
          left: {
            val: 2,
            left: { val: 3, left: null, right: null },
            right: { val: 4, left: null, right: null },
          },
          right: {
            val: 5,
            left: { val: 6, left: null, right: null },
            right: null,
          },
        },
        null,
        false,
      ],
      [
        {
          val: 1,
          left: {
            val: 2,
            left: { val: 3, left: null, right: null },
            right: { val: 4, left: null, right: null },
          },
          right: {
            val: 5,
            left: { val: 6, left: null, right: null },
            right: null,
          },
        },
        { val: 1, left: null, right: null },
        false,
      ],
    ];

    for (const [p, q, expected] of scenarios) {
      deepEqual(solution1(p, q), expected);
      deepEqual(solution2(p, q), expected);
    }
  });
});
```
