var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
};