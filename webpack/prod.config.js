/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/webpack/webpack/releases/tag/v4.0.0
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./base.config.js');
const CONSTANTS = require('./constants');

const extractSass = new MiniCssExtractPlugin({
  filename: 'assets/css/[name].[contenthash].css',
});

module.exports = merge(baseConfig, {
  // mode sets all sensible defaults for production optimizations
  // https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a
  mode: 'production',
  entry: {
    main: CONSTANTS.appMain,
  },
  output: {
    path: CONSTANTS.build,
    publicPath: '/',
    filename: 'assets/[name]-[contenthash].js',
    chunkFilename: 'assets/[name]-[contenthash].js',
  },
  module: {
    rules: [
      {
        test: [/\.css$/, /\.scss$/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new webpack.optimize.AggressiveMergingPlugin(), extractSass],
});
