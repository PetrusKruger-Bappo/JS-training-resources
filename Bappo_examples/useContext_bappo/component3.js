import React, { useContext } from "react";
import { Text } from "bappo-components";
import { MyContext } from "./Context";

export default function Component3() {
  const { speaker, setValue } = useContext(MyContext);
  return <Text>{speaker} : "Hello World from Component 3"</Text>;
}
