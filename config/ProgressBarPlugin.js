module.exports = (config, resolve) => {
  const ProgressBarPlugin = require('progress-bar-webpack-plugin');
  const chalk = require('chalk');

  return () => {
    config.plugin('ProgressBarPlugin')
      .use(ProgressBarPlugin, [{
        format: `  build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
        clear: false
      }])
  }
}
