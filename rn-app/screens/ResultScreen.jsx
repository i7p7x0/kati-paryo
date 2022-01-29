import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is ResultScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResultScreen;
