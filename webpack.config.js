const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: ['babel-polyfill', './src/js/index.tsx'],
    output: {
        filename: 'bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        client: {
            overlay: false
        }
    },
    module: {
        rules: [
            { test: /\.[jt]sx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.(png|svg|jpg|gif|woff2)$/, loader: 'file-loader' },
            { test: /\.html$/, loader: 'html-loader', },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: './public/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
}
