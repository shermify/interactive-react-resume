const path = require('path');

const root = path.resolve(__dirname, '../');
const src = path.resolve(root, 'src');
const images = path.resolve(src, 'images');
const output = path.resolve(root, 'dist');
const icons = path.resolve(images, 'icons');

module.exports = {
  root, src, images, output, icons,
};
