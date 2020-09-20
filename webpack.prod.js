const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const webpack = require('webpack');
const path = require('path');
module.exports = {
    mode:'production',
    entry: './src/index.tsx',
    devtool: 'source-map', 
    module: {
        rules: [{
            test: /\.(js|jsx|tsx|ts)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          }
    ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
          template: "./public/index.html",
          filename: "./index.html"
        })
      ]
};