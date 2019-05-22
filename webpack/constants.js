const path = require('path');

module.exports = {
  build: path.resolve(__dirname, '../build'),
  appRoot: path.resolve(__dirname, '../src'),
  appMain: path.resolve(__dirname, '../src/index.jsx'),
  nodeModules: path.resolve(__dirname, '../node_modules'),
  indexTemplate: path.resolve(__dirname, '../public/index.html'),
  favicon: path.resolve(__dirname, '../public/favicon.ico'),
};
