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
  plugins: ["react", "@typescript-eslint", "mobx", "css-modules"],
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
    "react/jsx-uses-vars": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "mobx/missing-observer": "off",
    "import/no-cycle": "warn",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "warn",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "warn",
  },
};
