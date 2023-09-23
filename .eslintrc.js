module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018, // or a higher version that supports arrow functions
  },
  env: {
    node: true,
  },
  rules: {
    'no-console': 'off', // Disable the 'no-console' rule to allow the use of console
    'indent': ['error', 2], // Enforce 2-space indentation
    'quotes': ['error', 'single'], // Enforce single quotes for strings
    'semi': ['error', 'always'], // Enforce using semicolons at the end of statements

     // Missing semicolon and extra spacing
     'semi': ['error', 'always'], // Enforce the use of semicolons
     'no-multi-spaces': ['error'], // Disallow multiple spaces
 
     // Unused variable 'c'
     'no-unused-vars': ['error', { 'vars': 'local', 'args': 'none' }], // Disallow unused variables
 
     // '==' should be '==='
     'eqeqeq': ['error'], // Enforce strict equality
 
     // Trailing whitespace at the end of the line
     'no-trailing-spaces': ['error'], // Disallow trailing whitespace
 
     // 'var' instead of 'let' or 'const'
     'no-var': ['error'], // Disallow var declarations
 
     // Global variable without declaration
     'no-undef': ['error'], // Disallow undeclared variables
  },
};
