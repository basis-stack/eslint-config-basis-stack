# Basis Stack ESLint Config
[![Build Status](https://travis-ci.org/basis-stack/eslint-config-basis-stack.svg?branch=master)](https://www.travis-ci.org/basis-stack/eslint-config-basis-stack)

ESLint config used throughout the Basis Stack. Takes AirBnB's base config and tweaks a few things to make more practical, and more focused to Basis Stack's unique requirements.

## Why ?

AirBnb's ESLint config is great, does a LOT out of the box and is indeed considered a de facto standard for ES6 style guidelines. However, a few things are a bit restrictive / opinionated, and the base ruleset does not cater to Basis Stack's unique requirements nor our own style preferences. This package attempts to fix those shortcomings and adjust the rules to a more tuned set particular for the stack.

## Usage

This package is predominately supposed to be used in conjunction with the [Basis Stack](http://www.github.com/basis-stack/basis), via either cloning the main basis template repo or by using the [Basis CLI](https://github.com/basis-stack/basis-cli) to bootstrap a new app.

However, it can be used independently if so required. To use independently in a project:

1) Install the package and it's peer dependencies via package manager of choice:


```
<npm install> || <yarn add> eslint-config-basis-stack eslint eslint-config-airbnb eslint-plugin-chai-friendly eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

2) Add an ESLint config file (.eslintrc.json) to project root with the following:

```
{
  "extends": "basis-stack"
}
```

3) Run ESLint via the method of choice (command line, npm script, gulp, etc)
