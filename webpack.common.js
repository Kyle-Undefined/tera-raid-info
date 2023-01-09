const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.ts',
        common: './src/common.ts',
        data: './src/data.ts',
        html: './src/html.ts',
        typeCalc: './src/typeCalc.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|ico)$/i,
                type: 'asset/resource'
            }
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],
        minimize: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './src/public/icons/favicon.ico',
            template: './src/public/index.html'
        }),
        new HtmlWebpackPlugin({
            favicon: './src/public/icons/favicon.ico',
            template: './src/public/404.html',
            filename: '404.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/public/images', to: './images' }
            ]
        })
    ]
};