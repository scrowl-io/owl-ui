const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')

const BUNDLE_NAME = 'owlui'

module.exports = [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCss({
        filename: `${BUNDLE_NAME}.[contenthash].css`
    })
]