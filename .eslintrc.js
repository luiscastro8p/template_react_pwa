module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier', 'no-unsanitized'],
  ignorePatterns: ['serviceWorkerRegistration.js'],
  rules: {
    'no-console': 'warn',
    'import/no-unresolved': 'warn',
    'arrow-body-style': 'off',
    'no-unused-vars': 'warn',
    'prefer-arrow-callback': 'off',
    'react/prop-types': [0],
    'prettier/prettier': 'error',
    'max-classes-per-file': ['error', 3],
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-unstable-nested-components': ['off'],
    'react/function-component-definition': [
      1,
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: ['arrow-function']
      }
    ],
    'no-restricted-syntax': 0
  }
};
