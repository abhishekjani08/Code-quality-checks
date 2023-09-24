const sum = (a, b) => {
  return a+b;
};

// Missing semicolon and extra spacing
const multiply = (a, b) => { return a * b; };
console.log(multiply(3,4));

// Unused variable 'c'
const unusedVar = (a, b, c) => {
  return a + b + c;
};
console.log(unusedVar(3,4,5));

// '==' should be '==='
if (sum(1, 2) === 3) {
  console.log('This is not type-safe.');
}


const divide = (a, b) => {
  if (b === 0) {
    return 'Cannot divide by zero.';
  }
  return a / b;
};
console.log(divide(3,4));

// 'var' instead of 'let' or 'const'
let outdatedVar = 'I am outdated variable declaration';
console.log(outdatedVar);

// Global variable without declaration
let undeclaredVar = 'I am undeclared';
console.log(undeclaredVar);