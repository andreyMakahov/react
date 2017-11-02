const common = require('../common');
const paths = require('../paths');

module.exports = Object.assign(common, {
    module: Object.assign(common.module, {
        rules: common.module.rules.concat(
            {
                test: /\.scss$/,
                include: [
                    paths.src,
                ],
                use: [
                    {
                        loader: 'style-loader',
                    },
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
            }
        )
    })
});
