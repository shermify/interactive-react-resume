const prod = require('./webpack.prod.js');
const dev = require('./webpack.dev.js');

const buildConfig = (env) => {
  if (env === 'prod') { return prod; }
  return dev;
};

module.exports = buildConfig;
