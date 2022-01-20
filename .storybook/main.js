module.exports = {
    "framework": "@storybook/react",
    "stories": [
        "../packages/**/*.stories.mdx",
        "../packages/**/*.stories.@(js|jsx|ts|tsx)"
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
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss')
                }
            }
        },
        {
            name: '@storybook/preset-scss',
            options: {
                cssLoaderOptions: {
                    modules: true
                },
            },
        }
    ]
}