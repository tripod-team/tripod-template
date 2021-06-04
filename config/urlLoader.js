module.exports = (config, resolve) => {
  const baseRule = config.module
    .rule('url')
    .test(/\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/);

  return () => {
    baseRule.use('url').loader(require.resolve('url-loader')).options({
      name: '[name]-[hash:6].[ext]',
      outputPath: 'images/',
      limit: 10240, //10K
      esModule: false,
    });
  };
};
