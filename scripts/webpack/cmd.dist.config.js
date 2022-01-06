const path = require('path')
const webpack = require('webpack')
const plugins = require('./opts.plugins.config')
const rules = require('./opts.rules.config')
const locations = require('../packages/locations')

const entries = locations.get();

const config = {
    mode: 'development',
    entry: entries,
    plugins: plugins,
    module: {
        rules: rules
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
    },
    output: {
        clean: true,
        path: path.resolve('./', 'dist'),
        library: 'OwlUI',
        libraryTarget: 'commonjs2',
        filename: '[name].js'
    }
}

console.log(JSON.stringify(config, null, 4))
webpack(config).run()