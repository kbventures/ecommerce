// {
//     "extends": [ "wesbos/typescript" ],
//     "ignorePatterns": ["build/**/*","coverage/**/*"],
//     "parserOptions": {
//       "project": "./tsconfig.json",
//       "tsconfigRootDir": "./",
//       "sourceType": "module"
//     }
//   }

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

// "exclude": ["./coverage", "./build","jest.config.js" ],

//   {
//     "extends": [ "wesbos/typescript" ],
//     "ignorePatterns": ["__tests__/**/*.test.ts","build/**/*","coverage/**/*", "jest.config.js"]
//   }

// {
//   "root": true,
//   "ignorePatterns": ["projects/**/*"],
//   "overrides": [
//     {
//       "files": ["*.ts"],
//       "parserOptions": {
//         "project": ["<YourProjectName>/tsconfig.json"],
//         "createDefaultProgram": true
//       },
