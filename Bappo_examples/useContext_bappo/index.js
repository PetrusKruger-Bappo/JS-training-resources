import React, { useState } from "react";
import { Text, View } from "bappo-components";
import Component1 from "./component1";
import Component3 from "./component3";
import { MyContext } from "./Context";

export default function UseContextTraining() {
  const [speaker, setSpeaker] = useState("speaker");
  return (
    <View>
        {/* can also manage the context provider with a separate component. See comments below */}
      <MyContext.Provider value={{ speaker, setSpeaker }}>
        <Component1 />
        <Component3 />
      </MyContext.Provider>
    </View>
  );
}

const MyContextProvider = ({children}) => {
    return (
    <MyContext.Provider value={{ speaker, setSpeaker }}>
        {children}
    </MyContext.Provider>
    );
}