// module.exports = {
//   reactStrictMode: true,
// };

const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // custom webpack aliases
    };
    return config;
  },
};
