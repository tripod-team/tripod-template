const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const envConfig = require("../lib").getEnv();

module.exports = {
  entry: "./src/index.js", // webpack的默认配置
  output: {
    path: path.resolve(__dirname, "../dist"), // 必须是绝对路径
    filename: "bundle.[hash:6].js",
    publicPath: "/", // 通常是CDN地址
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash:6].[ext]",
              outputPath: "images/",
              limit: 10240, //10K
              esModule: false,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html", // 打包后的文件名
      minify: {
        removeAttributeQuotes: false, // 是否删除属性的双引号
        collapseWhitespace: false, // 是否折叠空白
      },
      hash: true, // 是否加上hash值,默认是 false
    }),
    new webpack.DefinePlugin({
      ...envConfig,
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    alias: {
      views: path.resolve(__dirname, "../src/views"),
      api: path.resolve(__dirname, "../src/api"),
    },
  },
};
