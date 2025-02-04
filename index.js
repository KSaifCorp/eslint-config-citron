module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    /* Javascript */
    'max-lines': [
      'error',
      {
        max: 150,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 25,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-depth': ['error', 4],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 3],
    complexity: ['error', 10],

    /* Import */

    // Specify the file extension when importing only if not .ts
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
      },
    ],
    // Prefer named export
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // Allow underscore dangle
    'no-underscore-dangle': 'off',
    // Rewrite this airbnb rule to allow for and for or loops
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],

    /* Typescrypt */

    // Disable checksVoidReturn, too hard to handle with external packages
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],

    '@typescript-eslint/no-explicit-any': ['error'],
  },
};
