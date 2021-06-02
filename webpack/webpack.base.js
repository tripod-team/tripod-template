const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const envConfig = require("../src/lib").getEnv();

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
  devServer: {
    port: "7777", // 默认是8080
    open: true,
    hot: true,
    quiet: false, // 默认不启用. 若启用,除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见
    inline: true, // 默认开启 inline 模式. 如果设置为false,开启 iframe 模式
    stats: "errors-only", // 终端仅打印 error
    overlay: false, // 默认不启用. 若启用,当编译出错时,会在浏览器窗口全屏输出错误
    clientLogLevel: "silent", // 日志等级,当使用内联模式时,在浏览器的控制台将显示消息,如：在重新加载之前,在一个错误之前,或者模块热替换启用时.
    compress: true, // 是否启用 gzip 压缩
  },
  devtool: "cheap-module-eval-source-map", // 开发环境下使用
};
