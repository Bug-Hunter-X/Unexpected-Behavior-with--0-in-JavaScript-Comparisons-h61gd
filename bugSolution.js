function foo(a, b) {
  if (a === 0 || a === -0 || b === 0 || b === -0) {
    return 0; // Correctly handles both 0 and -0
  }
  // ... rest of the function
}