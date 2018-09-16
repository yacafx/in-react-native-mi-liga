import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hola Mundo</Text>

        <Button
          title="Mi botón"
          raised
          icon={{ name: "cached" }}
          backgroundColor="blue"
        />

        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
