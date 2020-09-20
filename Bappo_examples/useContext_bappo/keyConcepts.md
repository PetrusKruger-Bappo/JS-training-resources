  # Key Concepts of useContext


## Purpose
* Use a "Context Provider" to supply state and setState to any component in the tree.

## Index
  1. Create a context.
  2. Create a provider that accepts some values and wraps some child components.
  3. Pass those values into a child component with the useContext hook.



` /* ******************************** Detail ******************************** */ `
## Usage Breakdown
### Context Creation file
  1. import { createContext } from "react";
  2. export const MyContext = createContext(null);

### App Root File
  1. import React, { useState } from "react";
  2. import { MyContext } from "./Context";
  3. const [speaker, setSpeaker] = useState("speaker");
  4.  <MyContext.Provider value={{ speaker, setSpeaker }}> {children} </MyContext.Provider>

### Context Consumer Files
  1. import { MyContext } from "./Context";
  2. import React, { useContext } from "react";
  3. const { speaker, setSpeaker } = useContext(MyContext);
  4. <Text>{speaker}</Text>
  5. <Button text="Change Speaker" onPress={() => setSpeaker("Petrus")} />

  
