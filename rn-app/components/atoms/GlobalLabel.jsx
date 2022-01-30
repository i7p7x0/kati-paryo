import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorsCollection from "../../constants/ColorsCollection";

const GlobalLabel = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsCollection.tertiary,
    padding: 10,
    margin:10,
    borderRadius: 8,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  text: { color: ColorsCollection.light },
});

export default GlobalLabel;
