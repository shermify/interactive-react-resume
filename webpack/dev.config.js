/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const CONSTANTS = require('./constants');

const devServerPort = 5000;

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    path: CONSTANTS.build,
    publicPath: '/',
    filename: 'assets/[name]-[hash:6].js',
    chunkFilename: 'assets/[name]-[hash:6].js',
  },
  entry: {
    main: ['react-hot-loader/patch', CONSTANTS.appMain],
  },
  devServer: {
    port: devServerPort,
    host: 'local.devtempus.com',
    hot: true,
    publicPath: '/', // serves files from localhost:${devServerPort}/
    historyApiFallback: true,
    stats: {
      modules: false,
      chunks: false,
    },
  },
  module: {
    rules: [
      {
        test: [/\.css$/, /\.scss$/],
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
