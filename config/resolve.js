module.exports = (config, resolve) => {
  return () => {
    config.resolve.extensions.add('.js').add('.jsx').add('.css').end();

    config.resolve.modules
      .add('node_modules')
      .add(resolve('node_modules'));

    config.resolve.alias
      .set('@', resolve('src'))
      .set('views', resolve('src/views'))
      .set('api', resolve('src/api'))
      .end();
  };
};
