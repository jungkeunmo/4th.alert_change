import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

const App = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const clickHandler = () => {
    Alert.alert(`text : ${text}, password : ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <TextInput
          style={{
            width: 100,
            marginRight: 50,
            height: 50,
            fontSize: 20,
            backgroundColor: "#ecf0f1",
            borderRadius: 8,
          }}
          onChangeText={(t) => setText(t)}
          placeholder="A"
        ></TextInput>
        <TextInput
          style={{
            width: 100,
            height: 50,
            fontSize: 20,
            backgroundColor: "#ecf0f1",
            borderRadius: 8,
          }}
          onChangeText={(t) => setPassword(t)}
          placeholder="B"
        ></TextInput>
      </View>
      <View style={styles.boxContainer}>
        <Button title="button" onPress={() => clickHandler()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  boxContainer: {
    width: 400,
    height: 150,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
