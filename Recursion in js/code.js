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

