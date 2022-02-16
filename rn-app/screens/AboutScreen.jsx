import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import BackgroundColors from "../constants/colors/BackgroundColors";

const AboutScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.childContainer}>
        <Text style={styles.title}>What does this app do?</Text>
        <Text style={styles.content}>
          It helps to calculate everyone's bill contribution, splits the bill in
          a way that makes the payment experience easier and fun. It removes the
          need to manually calculate and split your bill, and as a result,
          saving time and negating miscalculations.
        </Text>
      </View>
      <View style={styles.childContainer}>
        <Text style={styles.title}>Who developed this app?</Text>
        <Text style={styles.content}>Ishan Pradhan</Text>
        <Text style={styles.content}>Contact:i7p7x0@gmail.com</Text>
      </View>
      <View style={styles.childContainer}>
        <Text style={styles.title}>Scope</Text>
        <Text style={styles.content}>
          This is a personal learning project which might not be available for
          public release. In case it makes it to the stores, you can report bugs
          to the developer's email.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: BackgroundColors.lightPink,
    flex: 1,
    justifyContent: "flex-start",
  },
  childContainer: {
    paddingHorizontal: Dimensions.get("window").width / 10,
    paddingVertical: Dimensions.get("window").height / 20,
  },
  title: { fontWeight: "bold", fontSize: Dimensions.get("window").width / 17 },
});

export default AboutScreen;
