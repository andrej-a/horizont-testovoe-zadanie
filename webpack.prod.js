const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    sourceMap: true,
                    toplevel: true,
                    keep_classnames: true,
                    compress: {
                        drop_console: true,
                    },
                    format: {
                        comments: false,
                    },
                    ecma: 2015,
                },
                extractComments: 'all',
                test: /(?<!\.d)\.(ts|tsx|js|jsx)(\?.*)?$/i,
            }),
        ],
    },
});
