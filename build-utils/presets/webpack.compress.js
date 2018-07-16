const WebpackCompression = require("compression-webpack-plugin");

module.exports = () => ({
  plugins: [new WebpackCompression()]
});
