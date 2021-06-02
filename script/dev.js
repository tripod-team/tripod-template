const webpack = require('webpack');
const chalk = require('chalk');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./base')();
const port = 7777;
const publicPath = '/';

config.devServer
  .quiet(true)
  .hot(true)
  .open(true)
  .https(false)
  .disableHostCheck(true)
  .inline(true)
  .stats('errors-only')
  .overlay(false)
  .clientLogLevel('silent')
  .compress(true)
  .historyApiFallback(true);

const compiler = webpack(config.toConfig());

const chainDevServer = compiler.options.devServer;
const server = new WebpackDevServer(
  compiler,
  Object.assign(chainDevServer, {})
);

['SIGINT', 'SIGTERM'].forEach(signal => {
  process.on(signal, () => {
    server.close(() => {
      process.exit(0);
    });
  });
});

server.listen(port);

new Promise(() => {
  compiler.hooks.done.tap('dev', stats => {
    const empty = '   ';
    const common = `App running at:
    - Local: http://localhost:${port}${publicPath}\n`;
    console.log(chalk.cyan('\n' + empty + common));
  });
});
