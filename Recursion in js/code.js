// Recursion in JavaScript
// Recursion is a programming concept where a function calls itself to solve a problem by breaking it down into smaller, similar subproblems. In JavaScript, recursion can be a powerful technique for tasks that can be divided into identical subtasks.

// Basic Structure of a Recursive Function
// Every recursive function needs two main components:

// Base Case: The condition that stops the recursion

// Recursive Case: The part where the function calls itself with a modified input

// function recursiveFunction(input) {
//   // Base case - stops the recursion
//   if (meetsBaseCondition(input)) {
//     return baseValue;
//   }
  
//   // Recursive case - function calls itself
//   return recursiveFunction(modifiedInput);
// }


// Simple Example: Factorial Calculation
// The factorial of a number n (n!) is the product of all positive integers less than or equal to n.

// function factorial(n) {
//   // Base case: factorial of 0 or 1 is 1
//   if (n <= 1) {
//     return 1;
//   }
  
//   // Recursive case: n! = n * (n-1)!
//   return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)


// Another Example: Fibonacci Sequence
// The Fibonacci sequence is a series where each number is the sum of the two preceding ones.

// function fibonacci(n) {
//   // Base cases
//   if (n === 0) return 0;
//   if (n === 1) return 1;
  
//   // Recursive case
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(6)); // Output: 8 (0, 1, 1, 2, 3, 5, 8)


// Important Considerations
// Base Case: Without a proper base case, your function will call itself indefinitely, leading to a stack overflow error.

// Stack Limits: JavaScript engines have a maximum call stack size (typically around 10,000-50,000 calls). Deep recursion may hit this limit.

// Performance: Recursive solutions can be less efficient than iterative ones due to function call overhead. Some problems can be optimized with techniques like memoization.

// Tail Call Optimization: In ES6, proper tail calls can optimize some recursive functions to avoid stack overflow, but this depends on JavaScript engine implementation.

// When to Use Recursion
// Recursion is well-suited for:

// Problems that can be divided into similar subproblems (tree/graph traversals, divide-and-conquer algorithms)

// Working with nested data structures

// Problems where a recursive solution is more elegant and readable than an iterative one



// Fundamental Questions
// 1. What is recursion and how does it work in JavaScript?
// Answer: Recursion is when a function calls itself until it reaches a base case that stops the recursion. In JavaScript, each recursive call adds to the call stack until the base case is met, then unwinds the stack.

// 2. What are the two essential components of a recursive function?
// Answer:

// Base case - the condition that stops the recursion

// Recursive case - where the function calls itself with modified arguments

// Coding Problems
// 3. Write a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive case
}
console.log(factorial(5)); // 120


// 4. Write a recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) return n; // base case
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}
console.log(fibonacci(6)); // 8


// 5. Write a recursive function to flatten a nested array
function flattenArray(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, [3, 4], 5]])); // [1, 2, 3, 4, 5]


// 6. Write a recursive function to reverse a string
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str[0];
}
console.log(reverseString("hello")); // "olleh"


// 7. Write a recursive function to sum all numbers from 1 to n
function sumRange(n) {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
}
console.log(sumRange(5)); // 15


// Practical Frontend Questions
// 8. How would you use recursion to traverse and manipulate the DOM tree?
// Answer: Recursion is useful for DOM traversal when you need to visit every node in a tree structure.
function traverseDOM(node, callback) {
  callback(node);
  node = node.firstChild;
  while (node) {
    traverseDOM(node, callback);
    node = node.nextSibling;
  }
}

// Usage:
traverseDOM(document.body, (node) => {
  if (node.nodeType === Node.ELEMENT_NODE) {
    console.log(node.tagName);
  }
});
