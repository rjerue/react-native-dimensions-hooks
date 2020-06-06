import React from 'react';
import { Dimensions } from 'react-native';

function useDimensionsHelper(dim) {
  var _React$useState = React.useState(Dimensions.get(dim)),
      dims = _React$useState[0],
      setDims = _React$useState[1];

  var handleDimChange = React.useCallback(function (dimensions) {
    setDims(dimensions[dim]);
  }, [dim]);
  React.useEffect(function () {
    Dimensions.addEventListener('change', handleDimChange);
    return function () {
      Dimensions.removeEventListener('change', handleDimChange);
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

export default useDimensions;
export { useScreenDimension, useWindowDimensions };
//# sourceMappingURL=react-native-dimensions-hooks.esm.js.map
