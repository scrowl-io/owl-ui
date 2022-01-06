const path = require('path')

const tsconfigPath = path.resolve(__dirname, '../../tsconfig.json')

module.exports = {
    test: /\.tsx?$/,
    use: {
        loader: 'ts-loader',
        options: {
            transpileOnly: true,
            options: {
                configFile: tsconfigPath
            }
        }
    },
    exclude: [
        /node_modules/,
        /\.test.tsx?$/
    ]
}