const path = require('./config/paths');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

const config = {
  devtool: 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index',
    ],
  },
  output: {
    path: path.output,
    pathinfo: true,
    filename: 'assets/bundle.js',
    publicPath: '/',
  },
  devServer: {
    hot: true,
    inline: true,
    publicPath: '/',
    // historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.src,
      },
      {
        test: /\.(jpg|gif|png|ico)$/,
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
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
        include: path.src,
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin({ debug: true }),
    new HtmlWebpackPlugin({ inject: true, template: './index.html' }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};

module.exports = config;
