const path = require('path')
const webpack = require('webpack')
const plugins = require('./opts.plugins.config')
const rules = require('./opts.rules.config')
const locations = require('../utls/locations')

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
        path: path.resolve('./', 'packages'),
        library: '@owlui',
        libraryTarget: 'commonjs2',
        chunkFilename: locations.filename
    }
}

webpack(config).run()