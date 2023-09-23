module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 12,
    },
    rules: {
      // Semicolon required at the end of statements
      semi: ['error', 'always'],
  
      // Enforce consistent spacing before and after parentheses
      'space-before-function-paren': ['error', 'always'],
  
      // Disallow unused variables
      'no-unused-vars': 'error',
  
      // Use strict equality '===' instead of '==' for comparisons
      eqeqeq: ['error', 'always'],
  
      // Disallow trailing whitespace at the end of lines
      'no-trailing-spaces': 'error',
  
      // Disallow the use of 'var', use 'let' or 'const' instead
      'no-var': 'error',
    },
  };
  