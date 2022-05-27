const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['recoil', 'set-cookie-parser','moment', 'runtypes','i18n-iso-countries']);
const withImages = require('next-images');
// const exportTrailingSlash = require('"exportTrailingSlash": true');
module.exports = withPlugins([
  withTM,
  withImages,
  // exportTrailingSlash
])

// module.exports = withImages({
//   target: 'serverless',
// })
