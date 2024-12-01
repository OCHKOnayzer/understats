/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true
	},
	ignorePatterns: [
		'dist/**/*',
		'coverage/**/*',
		'node_modules',
		'tmp',
		'*.svg',
		'*.json',
		'*.txt',
		'*.html',
		'*.png'
		// ''
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		project: './tsconfig.json',
		extraFileExtensions: ['.svelte'],
		ecmaFeatures: {
			impliedStrict: true
		}
		// sourceType: "module"
	},
	settings: {
		'import/extensions': ['.js', '.ts'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: 'tsconfig.json'
			},
			node: {
				extensions: ['.js', '.ts']
			}
		}
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	plugins: ['import', 'prettier', '@typescript-eslint', '@html-eslint', 'check-file'],
	extends: [
		'eslint:recommended',
		'plugin:svelte/recommended',
		'plugin:svelte/prettier',
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'prettier',
		// 'plugin:svelte/recommended',
		// 'plugin:svelte/prettier',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript'
	],
	rules: {
		"check-file/filename-naming-convention": [
			0,
			{
				"src/components/**/*.{js,ts,svelte}": "PASCAL_CASE",
				"src/routes/**/*.{js,ts,svelte}": "SNAKE_CASE"
			}
		],
		"check-file/folder-naming-convention": [
			0,
			{
				// "src/components/**/": "PASCAL_CASE",
				// "src/**/": "SNAKE_CASE",
				"src/**/": "KEBAB_CASE",
			}
		],

		'svelte/valid-compile': [
			'error',
			{
				ignoreWarnings: true
			}
		],

		'prettier/prettier': 2,

		'self-closing-style': 0,
		'html/self-closing': 0,

		indent: ['error', 'tab', { SwitchCase: 1 }],

		'@html-eslint/indent': ['error', 'tab'],

		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: 'import', next: '*' },
			{ blankLine: 'any', prev: 'import', next: 'import' },
		],

		'@typescript-eslint/indent': ['error', 'tab', { SwitchCase: 1 }],
		'@typescript-eslint/comma-dangle': 0,
		'@typescript-eslint/lines-between-class-members': 0,
		'@typescript-eslint/no-misused-promises': 0,
		'@typescript-eslint/unbound-method': 0,
		'@typescript-eslint/restrict-template-expressions': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/no-floating-promises': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-unsafe-call': 0,
		'@typescript-eslint/no-unsafe-return': 0,
		'@typescript-eslint/no-unsafe-argument': 0,
		'@typescript-eslint/keyword-spacing': 0,
		'@typescript-eslint/no-unsafe-member-access': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/require-await': 0,
		'@typescript-eslint/no-unsafe-assignment': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/naming-convention': 0,

		'no-useless-catch': 0,

		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'no-duplicate-imports': ['error'],
		'no-implicit-globals': ['error'],
		'no-whitespace-before-property': 'error',
		'no-multi-spaces': 'error',
		'no-trailing-spaces': ['error', { ignoreComments: true }],
		'arrow-spacing': 'error',
		'space-infix-ops': ['error'],

		'import/no-named-as-default': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-default-export': 1,
		'import/no-unresolved': 0,
		'import/prefer-default-export': 0,
		'import/no-cycle': 0,
		'import/extensions': 0,
		'import/namespace': [
			1,
			{
				allowComputed: true
			}
		],
		'import/order': [
			2,
			{
				'newlines-between': 'always',
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type']
			}
		]
	}
};
