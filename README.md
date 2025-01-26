# JavaScript -0 Bug

This repository demonstrates a subtle bug in JavaScript related to the handling of `-0` (negative zero).  JavaScript's loose comparison (`==`) treats `-0` and `0` as equal, while strict comparison (`===`) distinguishes between them.  Many functions don't explicitly check for `-0`, leading to unexpected results.

The `bug.js` file contains a function with this issue. The `bugSolution.js` file provides a corrected version.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment (e.g., browser's console, Node.js).
3. Run the `foo` function from `bug.js` with arguments that include `0` and `-0`.
4. Compare the output with the results from `bugSolution.js` to observe the difference.

## Solutions

The solution involves explicitly checking for both `0` and `-0` using strict equality (`===`) or using a helper function that handles this case.  The `bugSolution.js` provides one approach.