const {
    join,
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
    mode: "development",
    output: {
        publicPath: "/",
        assetModuleFilename: "images/[name][ext]",
        filename: "scripts/[name].bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: join(__dirname, '../dist'),
        port: 8082,
        // 配合 friendly-error-webpack-plugin
        // node-notifier webpack-build-notifier
        // quiet:true,
        watchContentBase: true,
        inline:true,
        hot: true
    },
    devtool:"source-map",
    plugins:[
        new HtmlWebpackPlugin({
            title:"金锐同创",
            filename:"index.html",
            template:resolve(__dirname,"../src/index-dev.html")
        }),
        new ReactRefreshWebpackPlugin(),
        new WebpackBar({
            name: '巽联coding',
            profile: true,
        }),
    ]
}