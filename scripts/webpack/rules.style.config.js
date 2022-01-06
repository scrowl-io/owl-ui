const MiniCss = require('mini-css-extract-plugin')

module.exports = {
    test: /\.s[ac]ss$/i,
    use: [
        {
            loader: MiniCss.loader
        },
        {
            loader: 'css-loader',
            options: {
                url: false,
                modules: true,
                sourceMap: true,
                importLoaders: 1
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                implementation: require('postcss'),
                postcssOptions: {
                    plugins: [
                        'postcss-import',
                        'postcss-url',
                        [
                            'autoprefixer',
                            {
                                'grid': true
                            }
                        ]
                    ]
                }
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
                implementation: require('sass')
            }
        }
    ]
}