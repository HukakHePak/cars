module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:mobx/recommended',
    'plugin:css-modules/recommended',
  ],
  overrides: [
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    }
  },
  plugins: [
    'react',
    'mobx',
    'css-modules'
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  rules: {
    'mobx/missing-observer': 'off',
    'react/prop-types': 'off',
    'no-console': 'off'
  },
};