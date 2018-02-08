module.exports = {
  
  // Extend AirBnB's ESLint config
  extends: 'airbnb',

  // Use babel-eslint parser to allow next-gen language features like ES6 / ES7 / Decorators, etc
  parser: 'babel-eslint',
  
  // Allow node, mocha and browser globals
  env: {
    node: true,
    mocha: true,
    browser: true
  },
  
  // Include chai-friendly plugin to allow expressions in test assertions (e.g. expect(instance).to.not.be.undefined)
  plugins: ['chai-friendly'],
  
  rules: {
    
    // Plugin rules
    'chai-friendly/no-unused-expressions': [2],
    'jsx-a11y/anchor-is-valid': [0],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/prop-types': [0],
    
    // AirBnB Overrides
    'class-methods-use-this': [0],
    'comma-dangle': [2, 'never'],
    'eol-last': [0],
    'import/no-extraneous-dependencies': [2, {
      'devDependencies': ['**/*Spec.js', 'gulpfile.babel.js', 'config/build.config.js']
    }],
    'indent': [2, 2, {
      'FunctionDeclaration': { 'parameters': 'first' },
      'CallExpression': { 'arguments': 'first' },
      'MemberExpression': 'off',
      'ImportDeclaration': 'first',
      'SwitchCase': 1
    }],
    'max-len': [0],
    'new-cap': [2, {
      'newIsCapExceptions': ['target'],
      'capIsNewExceptions': ['Authenticate', 'Controller', 'Route', 'Get', 'Head', 'Post', 'Put', 'Delete', 'Options']
    }],
    'no-console': [0],
    'no-param-reassign': [2, { 'props': false }],
    'no-underscore-dangle': [0],
    'no-unused-expressions': [0],
    'no-unused-vars': [0],
    'padded-blocks': [0],
    'prefer-destructuring': [0],
    'quotes': [2, 'single']
  }
};