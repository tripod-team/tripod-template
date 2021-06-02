const { DefinePlugin } = require('webpack');

module.exports = (config, resolve) => {
  const envConfig = require(resolve("lib")).getEnv();
  return () => {
    config.plugin('define-plugin')
      .use(DefinePlugin, [{
        ...envConfig
      }]);
  }
}