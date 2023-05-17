import React from "react";
import { StyleSheet, View, Image } from "react-native";
import splash_sample from "../assets/splash_example.png";

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <Image source={splash_sample} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
});
