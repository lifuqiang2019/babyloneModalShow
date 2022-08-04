const merge = require('webpack-merge');
const {
    join,
    resolve
} = require('path');
// 获取命令执行中的参数
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _modeFlag = _mode === "production";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopywebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const cesiumWorkers = '../Build/Cesium/Workers';
const cesiumSource = 'node_modules/cesium/Source';

// css解析
let cssLoaders = [
    MiniCssExtractPlugin.loader,
    // {
        // loader:'style-loader',
    // },
    {
        loader: "css-loader",
        options: {
            importLoaders: 1
        }
    },
    {
        loader: "postcss-loader"
    }
]

// 公共配置
const webpackBaseConfig = {
    entry: {
        app: resolve('src/index.tsx'),
    },
    output: {
        path: join(__dirname, './dist')
    },
    module: {
        rules: [{
                test: /\.(js|jsx|ts|tsx)/,
                include: [resolve('src')],
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: cssLoaders
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf|webp|mp4)$/,
                type: "asset"
            }
        ]
    },
    resolve: {
        alias: {
            "@assets": resolve("src/assets"),
            "@components": resolve("src/components"),
            "@models": resolve("src/models"),
            "@routes": resolve("src/routes"),
            "@pages": resolve("src/pages"),
            "@utils": resolve("src/utils"),
            "@recoil": resolve("src/recoil"),
            "@hooks": resolve("src/hooks"),
            "@api": resolve("src/api"),
        },
        extensions: [".js", ".ts", ".tsx", '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: _modeFlag ? "assets/styles/[name].[contenthash:5].css" : "assets/styles/[name].css",
          chunkFilename: _modeFlag ? "assets/styles/[id].[contenthash:5].css" : "assets/styles/[id].css",
          ignoreOrder: true,
        }),
        new CopywebpackPlugin({
          patterns: [
            { from: join(cesiumSource, cesiumWorkers), to: 'Workers' },
            { from: join(cesiumSource, 'Assets'), to: 'Assets' },
            { from: join(cesiumSource, 'Widgets'), to: 'Widgets' }
          ]
        }),
        new DefinePlugin({
          CESIUM_BASE_URL: JSON.stringify(_mode == 'development' ? './' : '/'),
        }),
    ]
}

module.exports = merge.default(webpackBaseConfig, _mergeConfig);