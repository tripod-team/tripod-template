const path = require('path');
const Config = require('webpack-chain');

const { findSync } = require('../lib');

const resolve = p => path.join(process.cwd(), p);

const config = new Config();
const files = findSync('config');

module.exports = () => {
  const map = new Map();
  
  files.map(_ => {
    const name = _.split('/')
      .pop()
      .replace('.js', '');
    return map.set(name, require(_)(config, resolve));
  });

  map.forEach(v => v());

  return config;
};

