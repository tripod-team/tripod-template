module.exports = (config, resolve) => {
  return () => {
    config
      .resolve
      .extensions
      .add('.js')
      .add('.jsx')
      .add('.css')
      .end();
    
    config
      .resolve
      .alias
      .set('views', resolve('src/views'))
      .set('api', resolve('src/api'))
      .end();
  };
};
