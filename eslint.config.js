module.exports = [
    {
      ignores: ["node_modules/**"],
    },
    {
      files: ["**/*.js"],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        globals: {
          require: "readonly",
          module: "readonly",
          __dirname: "readonly",
          process: "readonly",
          console: "readonly",
        },
      },
      rules: {
        "no-unused-vars": "warn",
        "no-undef": "error",
      },
    },
    {
      files: ["**/*.ejs"],
      rules: {
        "no-undef": "off",
      },
    },
  ];
  