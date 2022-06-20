module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 11']
        },
        modules: false,
        useBuiltIns: 'usage',
        corejs: '2.6.9'
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    '@babel/plugin-syntax-dynamic-import'
  ],
  env: {
    production: {
      presets: ['react-app']
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', 'dynamic-import-node']
    }
  }
};
