const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing:  `marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared: packageJson.dependencies // only used to avoid packages duplication but generates many js files instead of one or two
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)
