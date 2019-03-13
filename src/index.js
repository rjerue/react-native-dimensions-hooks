import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

function useDimensionsHelper(dim) {
  const [dims, setDims] = useState(Dimensions.get(dim));

  const handleDimChange = dimensions => {
    setDims(dimensions[dim]);
  };
  useEffect(() => {
    Dimensions.addEventListener("change", handleDimChange);
    return () => {
      Dimensions.removeEventListener("change", handleDimChange);
    };
  });
  return dims;
}

export function useWindowDimensions() {
  return useDimensionsHelper("window");
}

export function useScreenDimension() {
  return useDimensionsHelper("screen");
}

export default function useDimensions() {
  return {
    window: useWindowDimensions(),
    screen: useScreenDimension()
  };
}
