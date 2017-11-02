const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const webpack = require('webpack');
const SpritePlugin = require('svg-sprite-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('../config');
const paths = require('./paths');

module.exports = {
    entry: path.resolve(paths.src, 'components/App/index.js'),
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    output: {
        path: paths.dist,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=10240&name=' + path.resolve(paths.public, 'images/[name].[ext]').substring(1)
            },
            {
                test: /\.(woff|ttf|eot)$/i,
                loader: 'url-loader?limit=10240&name=' + path.resolve(paths.public, 'fonts/[name].[ext]').substring(1)
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            name: 'lzic_[hash:5]'
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { removeDesc: true },
                                { removeMetadata: true },
                                { removeComments: true },
                                { removeHiddenElems: true }
                            ]
                        }
                    }
                ],
                include: [
                    paths.src
                ]
            },
            {
                test: /\.js$/,
                include: [
                    paths.src,
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-0', 'react'],
                            plugins: ['transform-decorators-legacy']
                        }
                    }
                ],
            }
        ]
    },
    resolve: {
        modules: [
            paths.nodeModules
        ],
        extensions: ['.js', '.json', '.scss'],
        alias: {
            store: path.resolve(paths.src, 'store'),
            components: path.resolve(paths.src, 'components'),
            reducers: path.resolve(paths.src, 'reducers'),
            actions: path.resolve(paths.src, 'actions'),
            images: path.resolve(paths.src, 'images')
        }
    },

    devtool: 'source-map',

    plugins: [
        new SpritePlugin(),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new CaseSensitivePathsPlugin(),
        new CopyWebpackPlugin([
            { from: path.resolve('index.html') },
        ]),
    ]
};