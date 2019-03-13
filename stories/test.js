import React from "react";
import useDimensions from "../src";

export default () => {
  const { window, screen } = useDimensions();
  return (
    <div>
      <div>Window {JSON.stringify(window)}</div>
      <div>Screen {JSON.stringify(screen)}</div>
    </div>
  );
}


