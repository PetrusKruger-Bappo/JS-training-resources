import React from "react";
import { Text } from "bappo-components";
import { useGlobal } from "@bappo/sdk";

// Lots and lots of code

console.clear();

const useGlobalExample = () => {
  const globalVar = useGlobal();
  console.log("globalVar:", globalVar);
  return <Text>{globalVar.currentUser.firstName}</Text>;
};

export default useGlobalExample;
