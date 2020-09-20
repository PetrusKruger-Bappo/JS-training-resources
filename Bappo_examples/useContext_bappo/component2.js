import React, { useContext } from "react";
import { Button, Text } from "bappo-components";
import { MyContext } from "./Context";

export default function UseContextTraining() {
  const { speaker, setSpeaker } = useContext(MyContext);
  return (
    <React.Fragment>
      <Text>{speaker} : "Hello World from Component 2"</Text>
      <Button text="Change Speaker" onPress={() => setSpeaker("Petrus")} />
    </React.Fragment>
  );
}
