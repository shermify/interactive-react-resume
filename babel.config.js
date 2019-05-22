module.exports = {
  presets: [
    '@babel/react',
    [
      '@babel/env',
      {
        targets: {
          browsers: 'last 2 versions',
        },
        modules: false,
      },
    ],
  ],
  plugins: [
    'react-hot-loader/babel',
    'inline-react-svg',
    '@babel/plugin-proposal-class-properties'
  ],
  env: {
    production: {
      plugins: [
        [
          'transform-react-remove-prop-types',
          {
            removeImport: true,
          },
        ],
      ],
    },
  },
};
