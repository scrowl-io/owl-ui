const path = require('path');
const postcss = require('postcss');
// @ts-ignore
const postcssConfig = require('../.postcssrc.json');
const postcssPlugins = postcssConfig.plugins;

module.exports = {
  "framework": "@storybook/react",
  "staticDirs": [
    {
      from: '../lib/src/theme/assets',
      to: '/lib/src/theme/assets'
    }
  ],
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
  "addons": ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
  // @ts-ignore
  'webpackFinal': config => {
    let ruleTest;
    const ruleLookup = '/\\.s[ca]ss$/';
    // @ts-ignore
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
        sourceMap: true,
        importLoaders: 1,
        modules: {
          namedExport: true,
          localIdentName: '[local]'
        }
      }
    };
    const postcssLoader = {
      loader: 'postcss-loader',
      options: {
        implementation: postcss,
        postcssOptions: {
          "modules": true,
          "plugins": postcssPlugins
        }
      }
    };
    const sassLoader = {
      loader: 'sass-loader',
      options: {
        implementation: require('sass'),
        sassOptions: {
          includePaths: [
            "./",
            "../",
            "../../node_modules/",
            "../../node_modules/@owlui/theme/src/global/",
            "../../node_modules/@owlui/lib/src/theme/assets/",
            "../@owlui/theme/src/global/",
            "./node_modules/"
          ]
        }
      }
    };
    const fileLoader = {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    };

    if (ruleIdxStyle !== undefined && ruleIdxStyle > -1) {
      config.module.rules[ruleIdxStyle].use = [styleLoader, cssLoader, postcssLoader, sassLoader];
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