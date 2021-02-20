const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/jquery-plugins/init.js",
  output: {
    filename: "jquery-bundle.js",
    // TODO: This should go in /dist but because the firebase.json ignores
    // everything in the project directory it isn't available on the deployed
    // server. To resolve this we need to move everything from the public/ to
    // the dist/ dir.
    path: path.resolve(__dirname, "public", "assets", "js"),
    // TODO: As long as we're going to output to /public/assets/js we might as
    // well get this to output in the existin /public/assets/images dir.
    assetModuleFilename: "images/[hash][ext][query]",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
    ],
  },
};
