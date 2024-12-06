/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * @difficulty Easy
 * @example
 * solution1(q, p) -> true
 */
import { deepEqual } from "node:assert";
import { describe, test } from "node:test";

/** @typedef {{ val: number, left: TreeNode | null, right: TreeNode | null }} TreeNode */

/**
 * Deep-first search
 * Time: O(n) where n is the number of nodes in the smaller tree
 * Space: O(n) where n is the number of nodes in the smaller tree
 * @param {TreeNode | null} p - The root of the first tree
 * @param {TreeNode | null} q - The root of the second tree
 * @returns {boolean}
 */
function solution1(p, q) {
  if (!p || !q) {
    return p === q;
  }

  if (p.val === q.val) {
    return solution1(p.left, q.left) && solution1(p.right, q.right);
  }

  return false;
}

/**
 * Breadth-first search
 * Time: O(n) where n is the number of nodes in the smaller tree
 * Space: O(w) where w is the maximum width of the tree
 * @param {TreeNode | null} p - The root of the first tree
 * @param {TreeNode | null} q - The root of the second tree
 * @returns {boolean}
 */
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

describe("Same Tree", () => {
  test("should return correct values", () => {
    /** @type {[TreeNode | null, TreeNode | null, boolean][]} */
    const scenarios = [
      [
        {
          val: 1,
          left: {
            val: 2,
            left: {
              val: 3,
              left: null,
              right: null,
            },
            right: {
              val: 4,
              left: null,
              right: null,
            },
          },
          right: {
            val: 5,
            left: {
              val: 6,
              left: null,
              right: null,
            },
            right: null,
          },
        },
        {
          val: 1,
          left: {
            val: 2,
            left: {
              val: 3,
              left: null,
              right: null,
            },
            right: {
              val: 4,
              left: null,
              right: null,
            },
          },
          right: {
            val: 5,
            left: {
              val: 6,
              left: null,
              right: null,
            },
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
            left: {
              val: 3,
              left: null,
              right: null,
            },
            right: {
              val: 4,
              left: null,
              right: null,
            },
          },
          right: {
            val: 5,
            left: {
              val: 6,
              left: null,
              right: null,
            },
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
            left: {
              val: 3,
              left: null,
              right: null,
            },
            right: {
              val: 4,
              left: null,
              right: null,
            },
          },
          right: {
            val: 5,
            left: {
              val: 6,
              left: null,
              right: null,
            },
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
