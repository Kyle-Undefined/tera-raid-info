//const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': WARN,
    'no-promise-executor-return': ERROR,
    'default-param-last': ERROR,
    'no-var': ERROR,
    'prefer-const': ERROR,
  },
};