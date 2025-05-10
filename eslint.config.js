import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        // Use projectService instead of project for TypeScript project references
        projectService: true,
        sourceType: 'module'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': reactPlugin
    },
    rules: {
      // React specific rules
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true }
      ],
      
      // TypeScript rules
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/member-ordering': 'off',
      
      // General rules
      'semi': ['error', 'always'],
      'no-extra-semi': 'error',
      'eqeqeq': 'error',
      'camelcase': 'error',
      'no-console': 'error',
      'quotes': ['error', 'single'],
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      'comma-dangle': ['error', 'never'],
      'quote-props': ['error', 'as-needed'],
      
      // Indentation rules
      'indent': ['error', 2, { 'SwitchCase': 1, 'ignoredNodes': ['JSXElement', 'JSXElement > *'] }],
      'jsx-quotes': ['error', 'prefer-double'],
      'react/jsx-indent': ['error', 4],
      'react/jsx-indent-props': ['error', 2]
    }
  }
)
