module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  ignorePatterns: ['**/*.test.js'],
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    indent: 'off',
    'no-tabs': 'off',
  },
};
