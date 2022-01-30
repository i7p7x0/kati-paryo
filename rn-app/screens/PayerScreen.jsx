import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import { useSelector } from "react-redux";
import Payer from "../model/Payer";

// CUSTOM COMPONENTS

import PayerScrollView from "../components/molecules/PayerScrollView";

const PayerScreen = (props) => {
  const billPayers = useSelector((state) => state.payers);

  return (
    <View style={styles.screen}>
      <PayerScrollView payerData={billPayers} navigation={props.navigation} />

      <Button
        title="go back"
        onPress={() => {
          props.navigation.navigate(ScreenNavigationScreenNames.homeScreen);
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

export default PayerScreen;
