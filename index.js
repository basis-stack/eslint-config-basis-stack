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
    'react/forbid-prop-types': [2, { 'forbid': ['any'] }],
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-first-prop-new-line': [2, 'never'],
    'react/jsx-indent-props': [0],
    'react/prop-types': [0],

    // AirBnB Overrides
    'class-methods-use-this': [0],
    'comma-dangle': [2, 'never'],
    'eol-last': [0],
    'function-paren-newline': [2, 'never'],
    'import/no-extraneous-dependencies': [2, {
      'devDependencies': ['**/*Spec.js', 'gulpfile.babel.js', 'gulpfile.prepare.js', 'config/build.config.js']
    }],
    'indent': [2, 2, {
      'FunctionDeclaration': { 'parameters': 'first' },
      'CallExpression': { 'arguments': 'first' },
      'MemberExpression': 'off',
      'ImportDeclaration': 'first',
      'SwitchCase': 1,
      'ignoredNodes': ['JSXAttribute', 'JSXSpreadAttribute']
    }],
    'max-len': [0],
    'new-cap': [2, {
      'newIsCapExceptions': ['target'],
      'capIsNewExceptions': ['Authenticate', 'Controller', 'Middleware', 'Route', 'Router', 'Get', 'Head', 'Post', 'Put', 'Delete', 'Options']
    }],
    'no-console': [0],
    'no-param-reassign': [2, { 'props': false }],
    'no-underscore-dangle': [0],
    'no-unused-expressions': [0],
    'no-unused-vars': [0],
    'object-curly-newline': [0],
    'padded-blocks': [0],
    'prefer-destructuring': [0],
    'quotes': [2, 'single']
  }
};