import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        createDefaultProgram: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      'no-relative-import-paths': noRelativeImportPaths,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/alt-text': 'error',

      // React 플러그인에서 제공하는 기본 규칙
      'react/jsx-uses-react': 'off', // React 17 이후 JSX에서는 React import가 불필요
      'react/jsx-uses-vars': 'error', // JSX에서 사용된 변수는 경고 없이 사용하도록
      'react/react-in-jsx-scope': 'off', // React 17 이후로 React를 JSX 내에서 반드시 import하지 않아도 됨
      'react/prop-types': 'off', // TypeScript를 사용할 때 prop-types는 필요없음
      'react/display-name': 'off', // 디스플레이 이름에 대한 경고를 끄기
      'react/jsx-key': 'error', // JSX에서 배열을 렌더링할 때 key prop을 필수로 추가

      // 같은 폴더인 경우를 제외하고 import 경로는 항상 절대 경로를 사용
      'no-relative-import-paths/no-relative-import-paths': ['warn', { allowSameFolder: true, rootDir: 'src' }],
    },
  },
);
