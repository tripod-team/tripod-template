const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (config, resolve) => {
  return () => {
    config.plugin('mini-css-extract').use(MiniCssExtractPlugin, [
      {
        filename: '[hash:6].[name].css?v=[hash]',
        chunkFilename: '[hash:6].[id].css?v=[hash]',
        ignoreOrder: false,
        linkType: 'text/css',
      },
    ]);
  };
};
