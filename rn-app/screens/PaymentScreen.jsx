import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

// CUSTOM COMPONENTS

import TogglePaidCheck from "../components/molecules/payment/TogglePaidCheck";
import PaymentScrollView from "../components/molecules/payment/PaymentScrollView";

const PaymentScreen = () => {
  const billPayers = useSelector((state) => state.payers);
  const bill = useSelector((state) => state.bill);
  const [billState, setBillState] = useState({
    billAmount: bill.billAmount,
    pending: bill.billAmount,
  });
  const [billPayersState, setBillPayersState] = useState(billPayers);

  return (
    <View style={styles.screen}>
      <View>
        <PaymentScrollView billPayers={billPayersState} bill={billState} />
      </View>
      <View></View>
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
