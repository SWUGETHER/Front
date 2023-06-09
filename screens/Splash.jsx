import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <Text style={{fontSize: 30, fontWeight:'bold', textAlign: 'center'}}>SWUGETHER</Text>
        <Image source={require('../assets/sample.png')} style={styles.image} />
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
