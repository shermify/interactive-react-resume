const path = require('./config/paths');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

const config = {
  mode: 'production',
  devtool: 'hidden-source-map',
  entry: {
    app: ['./src/index'],
  },
  output: {
    path: path.output,
    pathinfo: false,
    filename: 'assets/bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.src,
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: 'file-loader?name=assets/images/[sha512:hash:base64:7].[ext]',
        include: path.images,
      },
      {
        test: /\.(ico)$/,
        use: 'file-loader?name=assets/images/[name].[ext]',
        include: path.images,
      },
      {
        test: /\.svg$/,
        use: 'svg-react-loader',
        include: path.icons,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
        include: path.src,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('assets/styles.css'),

    new HtmlWebpackPlugin({ inject: true, template: './index.html' }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'dsherman-resume',
      filename: 'service-worker.js',
      minify: true,
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};

module.exports = config;
