function foo(a, b) {
  if (a === null || b === null) {
    return null; // Explicit null check for robustness
  }
  return a + b; 
}

console.log(foo(1, null)); // Output: null
console.log(foo(null, 1)); // Output: null
console.log(foo(1, 2)); // Output: 3
//The solution maintains strict equality checks and handles null values explicitly for accurate results.