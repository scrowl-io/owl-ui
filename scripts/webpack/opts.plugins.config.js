const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')
const locations = require('../utls/locations')

module.exports = [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCss({
        filename: ({ chunk }) => {
            return locations.filename
                .replace('[id]', chunk.id)
                .replace('[name]', chunk.name)
                .replace(/js$/, 'css')
        }
    })
]