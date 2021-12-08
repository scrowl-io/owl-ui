module.exports = {
  "framework": "@storybook/react",
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "typescript": {
    "reactDocgen": "",
    "reactDocgenTypescriptOptions": {
      "compilerOptions": {
        "allowSyntheticDefaultImports": false,
        "esModuleInterop": false
      }
    }
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "storybook-css-modules-preset"
  ]
}