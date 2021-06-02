const baseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");

const devConfig = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader", "postcss-loader"],
        exclude: /node_modules/,
      },
    ],
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

module.exports = merge(baseConfig, devConfig);
