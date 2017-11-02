const common = require('../common');
const paths = require('../paths');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = Object.assign(common, {
    module: Object.assign(common.module, {
        rules: common.module.rules.concat(
            {
                test: /\.scss$/,
                include: [
                    paths.src,
                ],
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        },
                    ]
                })
            }
        )
    }),
    plugins: common.plugins.concat([
        new UglifyJSPlugin({
            compress: {
                warnings: false,
                drop_console: true
            },
            comments: false
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ])
});
