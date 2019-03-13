import React from "react";
import { storiesOf } from "@storybook/react";
import ReactMarkdown from "react-markdown";
import readme from "../readme.md";
import Test from "./test";

storiesOf("Readme", module).add("Readme.md", () => (
  <ReactMarkdown source={readme} />
));

storiesOf("Examples", module)
  .add("Basic Example", () => <Test />)