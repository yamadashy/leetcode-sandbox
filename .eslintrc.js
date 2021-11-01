'use strict';

/* global module */

module.exports = {
  root: true,
  env: {
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'warn',

    // disable
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-constant-condition': 'off',
  },
};
