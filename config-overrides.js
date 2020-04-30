const path = require('path');

const {
  override,
  addWebpackAlias
} = require('customize-cra');

const alias = {
  '@': path.resolve(__dirname, 'src'),
};

module.exports = override(
  addWebpackAlias(alias)
);
