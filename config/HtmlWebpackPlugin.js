const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config, resolve) => {
  return () => {
    config.plugin('html').use(HtmlWebpackPlugin, [
      {
        template: resolve('public/index.html'),
        filename: 'index.html', // 打包后的文件名
        minify: {
          removeAttributeQuotes: false, // 是否删除属性的双引号
          collapseWhitespace: false, // 是否折叠空白
        },
        hash: true, // 是否加上hash值,默认是 false
      },
    ]);
  };
};
