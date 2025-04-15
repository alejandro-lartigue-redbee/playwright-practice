import eslintPluginPlaywright from 'eslint-plugin-playwright';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'playwright': eslintPluginPlaywright,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'playwright/no-wait-for-timeout': 'warn',
      'playwright/no-page-pause': 'warn',
    },
  },
];