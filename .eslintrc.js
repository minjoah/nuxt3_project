module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ["node_modules/*", "dist/*"],
  extends: ["plugin:nuxt/recommended", "plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
  plugins: ["vue", "prettier"],
  rules: {}
}
