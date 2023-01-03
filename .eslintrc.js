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
    "plugin:import/typescript",

  ],
  overrides: [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "extends": [
        "airbnb-typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      "rules": {
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/indent": "off"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json"
  },
  plugins: ["react", "mobx", "css-modules", "@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".scss"]
      },
    },
  },
  rules: {
    "mobx/missing-observer": "off",
    "react/prop-types": "off",
    "no-console": "off",
    "css-modules/no-undef-class": "off",
    "css-modules/no-unused-class": "off",
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
      },
    ],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "scss": "never"
      }]
  },
};
