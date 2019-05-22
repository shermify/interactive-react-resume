/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('config');

const CONSTANTS = require('./constants');

module.exports = {
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [CONSTANTS.nodeModules, CONSTANTS.appRoot],
  },
  stats: {
    modules: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|otf|eot|pdf|jpe?g|gif|png|svg|woff2?)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/files/[hash:6].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: 'svg-react-loader',
        include: path.resolve(__dirname, '../src/images/icons'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: CONSTANTS.indexTemplate, // path to our skeleton
      filename: 'index.html', // name of output file
      inject: 'body', // add any javascript to the bottom of <body>
      // favicon: CONSTANTS.favicon,
    }),
    new webpack.DefinePlugin({
      envConfig: JSON.stringify(config),
    }),
  ],
};
