const MiniCssExtraPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Choose webpack mode wisely
let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,

  devtool: "source-map",

  output: {
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtraPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
    ],
  },

  plugins: [
    new MiniCssExtraPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],

  devServer: {
    static: {
      directory: "./dist", // Serve this directory
    },
    open: true, // When Server start open Chrome
  },
};
