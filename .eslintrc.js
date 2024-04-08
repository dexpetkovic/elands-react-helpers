const config = {
  root: true,
  settings: {
    'import/ignore': ['react-native'],
  },
  ignorePatterns: ['.eslintrc.cjs'],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import', 'import', 'jest'],
  rules: {
    'react-hooks/exhaustive-deps': ['error'],
    '@typescript-eslint/ban-ts-comment': ['warn'],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'react/react-in-jsx-scope': 'off',
    'arrow-parens': 'error',
    'prettier/prettier': ['off', { endOfLine: 'auto' }],
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc',
        },
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object']],
        'newlines-between': 'always',
      },
    ],
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'prefer-template': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'never'],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
}
module.exports = config
