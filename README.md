# React Native Dimensions Hooks

Hooks to wrap the React Native Dimensions API for Native and React Native Web.

They use listeners under the hood, so they will update on window and screen size changes.

[Demo](https://rjerue.github.io/react-native-dimensions-hooks)

## Usage:

```
import React from "react";
import useDimensions from "react-native-dimensions-hooks";

export default () => {
  const { window, screen } = useDimensions();
  return (
    <div>
      <div>Window {JSON.stringify(window)}</div>
      <div>Screen {JSON.stringify(screen)}</div>
    </div>
  );
}

```

Window or screen may be also imported individually by `useWindowDimensions` or `useScreenDimension`.

```
import { useWindowDimensions, useScreenDimension} from "react-native-dimensions-hooks";

const useScreenDimension = useScreenDimension()
const windowDimensions = useWindowDimensions()
```
