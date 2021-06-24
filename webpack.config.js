const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './site/scripts', 'index.js'),
    output:{
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {test: /\.mp3$/,
            use: 'file-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './site/index.html'
        })
    ]
}