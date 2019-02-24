module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'jest'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/prefer-default-export': 'off',
    quotes: ['error', 'single'],
    'no-prototype-builtins': 'off',
    'linebreak-style': 'off',
    'object-shorthand': 'off',
    'no-restricted-syntax': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'one-var': 'off',
    'no-await-in-loop': 'off',
    'no-param-reassign': 'off',
  },
  settings: {
    react: {
      version: '16.7',
    },
  },
}
