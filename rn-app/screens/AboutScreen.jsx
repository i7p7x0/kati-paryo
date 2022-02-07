import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackgroundColors from "../constants/colors/BackgroundColors";

const AboutScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>in progress.... made by ishan dai</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: BackgroundColors.lightPink,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AboutScreen;
