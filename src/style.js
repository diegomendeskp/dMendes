import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react";

const StyleImage = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./polygon.svg')} style={styles.imageBackground}>
      <Image source={require('./polygon.svg')} style={styles.imageForeground}/>
      <Text style={styles.text}>React Native</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  imageForeground: {
    width: 250,
    height: 250
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default StyleImage;