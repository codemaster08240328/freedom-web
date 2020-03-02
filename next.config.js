const withTypescript = require('@zeit/next-typescript');
const withAssetsImport = require('next-assets-import');
const withCSS = require('@zeit/next-css');

module.exports = withTypescript(withAssetsImport(withCSS({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  }
})));
