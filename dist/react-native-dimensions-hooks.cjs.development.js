'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactNative = require('react-native');

function useDimensionsHelper(dim) {
  var _React$useState = React.useState(reactNative.Dimensions.get(dim)),
      dims = _React$useState[0],
      setDims = _React$useState[1];

  var handleDimChange = React.useCallback(function (dimensions) {
    setDims(dimensions[dim]);
  }, [dim]);
  React.useEffect(function () {
    reactNative.Dimensions.addEventListener('change', handleDimChange);
    return function () {
      reactNative.Dimensions.removeEventListener('change', handleDimChange);
    };
  }, [handleDimChange]);
  return dims;
}

function useWindowDimensions() {
  return useDimensionsHelper('window');
}
function useScreenDimension() {
  return useDimensionsHelper('screen');
}
function useDimensions() {
  return {
    window: useWindowDimensions(),
    screen: useScreenDimension()
  };
}

exports.default = useDimensions;
exports.useScreenDimension = useScreenDimension;
exports.useWindowDimensions = useWindowDimensions;
//# sourceMappingURL=react-native-dimensions-hooks.cjs.development.js.map
