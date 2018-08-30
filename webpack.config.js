const path = require("path");

module.exports = {
  mode: process.env.WEBPACK_SERVE ? "development" : "production",
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "docs"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules", "web_modules"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|web_modules)/,
        loader: "awesome-typescript-loader"
      }
    ]
  }
};
