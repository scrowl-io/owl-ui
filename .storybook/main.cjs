const path = require('path');

module.exports = {
  "framework": "@storybook/react",
  "staticDirs": ['../packages/theme/src/global'],
  "stories": ["../packages/**/*.stories.mdx", "../packages/**/*.stories.@(js|jsx|ts|tsx)"],
  "typescript": {
    "reactDocgen": "",
    "reactDocgenTypescriptOptions": {
      "compilerOptions": {
        "allowSyntheticDefaultImports": false,
        "esModuleInterop": false
      }
    }
  },
  "addons": ['@storybook/addon-links', '@storybook/addon-essentials', {
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
            "generateScopedName": "owlui-[local]",
            "localsConvention": "camelCase"
          }
        }
      }
    }
  }, '@storybook/preset-scss'],
  'webpackFinal': config => {
    let ruleTest;
    const ruleLookup = '/\\.s[ca]ss$/';
    const ruleIdxStyle = config.module.rules.findIndex(rule => {
      ruleTest = rule.test ? rule.test.toString() : '';
      return ruleTest === ruleLookup;
    });
    const styleLoader = {
      loader: 'style-loader',
      options: {
        esModule: true
      }
    };
    const cssLoader = {
      loader: 'css-loader',
      options: {
        url: false,
        modules: {
          namedExport: true,
          localIdentName: 'owlui-[local]'
        },
        sourceMap: true,
        importLoaders: 1
      }
    };
    const sassLoader = {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        implementation: require('sass')
      }
    };
    const fileLoader = {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    };

    if (ruleIdxStyle !== undefined && ruleIdxStyle > -1) {
      config.module.rules[ruleIdxStyle].use = [styleLoader, cssLoader, sassLoader];
    }

    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg|jpeg)&/,
      use: [fileLoader],
      include: path.resolve(__dirname, '../')
    });
    config.module.rules.push({
      test: /.storybook\/preview.js/,
      resolve: { fullySpecified: false },
    })
    return config;
  },
  core: {
    builder: "webpack5"
  }
};