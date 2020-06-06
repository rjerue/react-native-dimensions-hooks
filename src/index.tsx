import React from 'react';
import { Dimensions } from 'react-native';

function useDimensionsHelper(dim: 'window' | 'screen') {
  const [dims, setDims] = React.useState(Dimensions.get(dim));

  type HandleDimChange = Parameters<Dimensions['addEventListener']>[1];

  const handleDimChange: HandleDimChange = React.useCallback(
    dimensions => {
      setDims(dimensions[dim]);
    },
    [dim]
  );

  React.useEffect(() => {
    Dimensions.addEventListener('change', handleDimChange);
    return () => {
      Dimensions.removeEventListener('change', handleDimChange);
    };
  }, [handleDimChange]);
  return dims;
}

export function useWindowDimensions() {
  return useDimensionsHelper('window');
}

export function useScreenDimension() {
  return useDimensionsHelper('screen');
}

export default function useDimensions() {
  return {
    window: useWindowDimensions(),
    screen: useScreenDimension(),
  };
}
