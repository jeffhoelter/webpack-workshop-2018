// webpack v4
const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  console.log(mode);
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: ["url-loader"]
          }
        ]
      },
      entry: { main: "./src/index.js" },
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
