const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  entry: {
    mylib: path.resolve(__dirname, "src/index.ts"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
      },
    ],
  },
  output: {
    chunkFilename: "[name].js",
    filename: "[name].js",
  },
  devtool: "source-map",
  resolve: { extensions: [".ts", ".js"] },
};
