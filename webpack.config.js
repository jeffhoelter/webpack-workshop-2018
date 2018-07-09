// webpack v4
const path = require("path");
module.exports = {
  mode: "development",
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  }
};
