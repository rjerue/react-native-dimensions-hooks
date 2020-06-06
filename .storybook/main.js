module.exports = {
  stories: ['../stories/**/*.stories.(ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/preset-typescript',
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': require.resolve('react-native-web'),
    };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
