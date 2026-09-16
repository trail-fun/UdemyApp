// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config')
const expoConfig = require("eslint-config-expo/flat")

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"]
  },
  {
    rules: {
      "semi": [2, "never"],
      "comma-dangle": [2, "never"],
      "@typescript-eslint/explicit-function-return-type": "error",
      "eol-last": ["error", "always"],
    }
  }
])
