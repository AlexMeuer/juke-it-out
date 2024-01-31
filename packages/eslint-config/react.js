
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-formatting/strict",
  ],
  plugins: ["@typescript-eslint", "unicorn", "unused-imports", "prettier"],
  rules: {},
  overrides: [],
};
