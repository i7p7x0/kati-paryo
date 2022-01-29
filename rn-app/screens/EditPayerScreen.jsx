import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// CUSTOM COMPONENTS

import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";

const EditPayerScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is EditPayerScreen</Text>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.navigate(ScreenNavigationScreenNames.payerScreen);
        }}
      />
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

export default EditPayerScreen;
