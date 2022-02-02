import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import ColorsCollection from "../../constants/ColorsCollection";
import BackgroundColors from "../../constants/colors/BackgroundColors";

const GlobalLabel = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BackgroundColors.dark,
    paddingHorizontal: Dimensions.get("window").width / 12,
    paddingVertical: Dimensions.get("window").height / 80,
    marginHorizontal: Dimensions.get("window").width / 80,
    marginVertical: Dimensions.get("window").height / 80,
    borderRadius: 8,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  text: { color: ColorsCollection.light, fontWeight: "bold" },
});

export default GlobalLabel;
