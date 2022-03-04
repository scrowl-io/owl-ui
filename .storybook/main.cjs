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
                  implementation: require('postcss'),
                  "modules": true,
                  "plugins": {
                    "postcss-import": true,
                    "postcss-url": true,
                    "autoprefixer": {
                      "grid": true
                    },
                    "postcss-modules": {
                      "generateScopedName": "[local]"
                    }
                  }
                }
            }
        },
        '@storybook/preset-scss'
    ],
    'webpackFinal': (config) => {
      let ruleTest
      const ruleLookup = '/\\.s[ca]ss$/'
      const ruleIdxStyle = config.module.rules.findIndex((rule) => {
        ruleTest = rule.test ? rule.test.toString() : ''
        return (ruleTest === ruleLookup)
      })
      const styleLoader = {
        loader: 'style-loader',
        options: {
          modules: {
            namedExport: true
          }
        }
      }
      const cssLoader = {
        loader: 'css-loader',
        options: {
          url: false,
          modules: {
            namedExport: true,
            localIdentName: '[local]'
          },
          sourceMap: true,
          importLoaders: 1
        }
      }
      const sassLoader = {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          implementation: require('sass')
        }
      }

      if (ruleIdxStyle !== undefined && ruleIdxStyle > -1) {
        config.module.rules[ruleIdxStyle].use = [
            styleLoader,
            cssLoader,
            sassLoader
        ]
      }
      
      return config;
    }
}