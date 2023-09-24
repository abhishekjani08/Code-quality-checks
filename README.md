# Code-quality-checks

Correct Code:
let sum = (a, b) => {
  return a + b;
};
console.log(sum(3, 4));

const multiply = (a, b) =>{
  return a * b;
};
console.log(multiply(3, 4));

const unusedVar = (a, b, c) =>{
  return a + b + c;
};
console.log(unusedVar(3, 4, 5));

if (sum(1, 2) === 3) {
  console.log('This is not type-safe.');
}

// Trailing whitespace at the end of the line
const divide = (a, b) => {
  if (b === 0) {
    return 'Cannot divide by zero.';
  }
  return a / b;
};
console.log(divide(3, 4));

let outdatedVar = 'I am outdated variable declaration';
console.log(outdatedVar);

let undeclaredVar = 'I am undeclared';
console.log(undeclaredVar);
