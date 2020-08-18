import React from "react";
import { IconCard, Text, View } from "bappo-components";
import { useChat } from "@bappo/sdk";

console.clear();
export default function UsechatExample() {
  const exampleChat = useChat();

  const openChat = () => {
    console.log("Chat Clicked!");
    exampleChat.open({ objectKey: "Department", recordId: "2" });
  };
  return (
    <View style={styles.view}>
      <IconCard
        icon="chat"
        color="blue"
        size="large"
        text="Chat"
        onPress={openChat}
      />
    </View>
  );
}

// A neat wat to manage many styles
const styles = {
  view: {
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center"
  }
};
