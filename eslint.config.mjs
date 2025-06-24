// eslint.config.ts

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Fix the red warning by providing recommendedConfig
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    rules: {
      // You can customize or override these rules if needed
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },
});

const eslintConfig = [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'next/typescript'
  ),

  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // ✅ Next.js handles this
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-expressions': 'off', // ✅ Fix for expression warnings
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },
];

export default eslintConfig;