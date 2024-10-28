/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript', // the following lines do the trick
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  /* Some airbnb rules are too restrictive, we override them */
  rules: {
    /* Overrides for eslint-plugin-import */

    /* ---- Prefer named exports */
    'import/no-default-export': 1,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    /* ---- Order imports */
    'import/order': [
      2,
      {
        'newlines-between':
          'ignore' /* Newline between groups of imports */,
        pathGroups: [
          {
            pattern: '/**',
            group: 'parent',
            position: 'before',
          },
        ] /* Place "/src/..." imports before "parent" imports */,
        alphabetize: {
          order:
            'asc' /* Sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* Ignore case. Options: [true, false] */,
        },
      },
    ],

    'sort-imports': [
      2,
      { ignoreCase: true, ignoreDeclarationSort: true },
    ] /* Sort import members: { b, A, c } => { A, b, c } */,

    /* Rest */

    semi: [2, 'never'] /* Don't use semicolons */,
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      } /* Allow `for (...; i++)` - Airbnb doesn't */,
    ],
    'prefer-destructuring': [
      2,
      {
        object: true,
        array: false /* Don't force array destructuring (Airbnb does) */,
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'consistent-return': 1,
    'object-shorthand': 1,
    'no-unused-vars': 1,
    'brace-style': [
      1,
      'stroustrup',
      {
        allowSingleLine: true,
      },
    ],
    'no-use-before-define': 0 /* Allow hoisting */,
    'no-underscore-dangle': 0 /* Allow using _ at either the beginning or the end of identifiers */,
    'no-multiple-empty-lines': 0,
    'func-style': 0,
    eqeqeq: 0 /* Don't force === instead of == */,
    'global-require': 0 /* Allow require() everywhere, sometimes usefull for Meteor.isServer() blocks. */,
    'no-debugger': 0,
    'no-console': 0,
    'no-alert': 0,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'no-multi-assign': 0,
    'lines-between-class-members': 0,
    'new-parens': 0,
    'implicit-arrow-linebreak': 0,
    'arrow-parens': 0,
    'max-classes-per-file': 0 /* To avoid errors when using Enum(class {...}) */,
    'space-before-function-paren': 0,
    'no-param-reassign': 0,
    camelcase: 0,
  },
}
