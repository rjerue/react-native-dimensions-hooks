
module.exports = async ({config}) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      'react-native': 'react-native-web',
    },
  }
  return config
}
