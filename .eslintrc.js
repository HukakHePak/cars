module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:mobx/recommended",
    "plugin:css-modules/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "mobx", "css-modules", "prettier"],
  settings: {
    "react": {
      "version": "detect", 
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".scss"]
      },
    },

  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "mobx/missing-observer": "off",
    "import/no-cycle": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "warn",
  },
};
