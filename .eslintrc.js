module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:mobx/recommended",
    "plugin:css-modules/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "mobx", "css-modules", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  rules: {
    "mobx/missing-observer": "off",
    "react/prop-types": "off",
    "no-console": "off",
    "css-modules/no-undef-class": "off",
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
      },
    ],
    indent: ["error", 2],
  },
};
