import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
	{ ignores: ['dist'] },
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		settings: { react: { version: '18.3' } },
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					caughtErrors: 'all',
					ignoreRestSiblings: false,
					reportUsedIgnorePattern: false,
				},
			],
			// Add the react/prop-types rule
			'react/prop-types': [
				'error', // Enabled (set to 'error' to enforce or 'warn' for warnings)
				{
					ignore: [], // Props you want to ignore for validation (empty means none)
					customValidators: [], // Add custom prop type validators here
					skipUndeclared: false, // Set to true if you want to skip components without PropTypes declaration
				},
			],
		},
	},
];
