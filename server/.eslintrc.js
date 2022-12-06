module.exports = {
  extends: ["wesbos/typescript"],
  ignorePatterns: [
    "build/**/*",
    "coverage/**/*",
    ".eslintrc.js",
    "jest.config.js",
  ],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
};

