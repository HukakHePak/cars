module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:mobx/recommended",
    "plugin:css-modules/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",

  ],
  overrides: [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "extends": [
        "airbnb-typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
      ],
      "rules": {
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-floating-promises": "off"
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
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".scss", ".json"]
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
        eol: "crlf"
      },
    ],
    quotes: ["error", "double"],
    indent: ["error", 2, { "SwitchCase": 2 }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "scss": "never",
        "json": "never"
    }],
    "import/prefer-default-export": "off",
  },
};
