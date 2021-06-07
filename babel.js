module.exports = (api) => {
  return {
    presets: [['@babel/preset-env',{
      modules: false,
      targets: {
        chrome: 59,
        edge: 13,
        firefox: 50,
        safari: 8
      }
    }], ['@babel/preset-react']],
    plugins: [
      'transform-class-properties',
      '@babel/proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
