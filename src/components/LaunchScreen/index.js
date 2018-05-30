import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class LaunchScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      console.log(`Called Navigation`);
      const { navigate } = this.props.navigation;
      navigate("Counter", { title: "Default" });
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Launch Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
