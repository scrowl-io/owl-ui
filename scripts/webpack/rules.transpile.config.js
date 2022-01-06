const path = require('path')

const tsconfigPath = path.resolve(__dirname, '../../tsconfig.json')
const babelLoader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true
    }
}

module.exports = {
    test: /\.tsx?$/,
    use: [
        babelLoader,
        {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                configFile: tsconfigPath
            }
        }
    ],
    exclude: [
        /node_modules/,
        /\.test.tsx?$/
    ]
}