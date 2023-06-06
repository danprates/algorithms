# Tech Interview Problem Solving with JavaScript

This repository contains solutions to various technical interview problems implemented in JavaScript. Each problem is solved and tested to ensure correctness.

## List of Problems

1. Two Sums
1. Max Consecutive Ones
1. Longest Substring Without Repeating Characters
1. Three Sums
1. Valid Parentheses
1. Valid Palindrome
1. Winning Card
1. Generate Sentence
1. Sorted Squared
1. Find First Non-Repeating Character Index

## Usage

To run the tests for all problems, execute the following command:

```bash
npm run test
```

Feel free to explore each problem's solution and modify them as needed. Happy problem solving!

## Contributing

Contributions to this project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository
1. Create a new branch for your feature or bug fix
1. Make your changes and ensure that the tests pass
1. Commit your changes and push them to your forked repository (following the [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) approach)
1. Submit a pull request describing your changes
1. Please make sure to follow the existing code style and provide a clear description of your changes. Your contribution will be reviewed, and once approved, it will be merged into the main repository.

### Style Guide

```javascript
/**
 * Name of the Problem
 * Short Description
 *
 * @example
 * solution('input data') -> 'expected return'
 */
const { deepEqual } = require("assert");

/**
 * Time: O(n)
 * Space: O(n)
 * @param {String} str
 * @returns {Boolean}
 */
function solution1(str) {
  // Your code goes here
}

module.exports = () => {
  // Test cases
  {
    deepEqual(solution1("valid input"), "expected to be true");
    deepEqual(solution1("invalid input"), "expected to be false");
  }
};
```

In the above code snippet, you can see the structure of how to create a new algorithm from scratch.

1. Replace "Name of the Problem" with the actual name of the problem.
1. Write a short description of the problem.
1. Provide an example of the function call and the expected return value.
1. Implement the solution inside the solution1 function.
1. Test your solution by adding test cases inside the module.exports block using the deepEqual function to compare the actual output with the expected output.
1. In your `index.js` file, make sure to import the newly added algorithm module.

This template can be used as a starting point for solving new problems. Feel free to modify it according to the requirements of the problem you are working on.

## License

This project is licensed under the [MIT License](https://github.com/danprates/algorithms/blob/master/LICENSE).
