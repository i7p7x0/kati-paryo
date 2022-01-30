import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PaymentScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is PaymentScreen</Text>
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

export default PaymentScreen;
