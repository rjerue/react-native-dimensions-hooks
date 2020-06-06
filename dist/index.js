
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-native-dimensions-hooks.cjs.production.min.js')
} else {
  module.exports = require('./react-native-dimensions-hooks.cjs.development.js')
}
