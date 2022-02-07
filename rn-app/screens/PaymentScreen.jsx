import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

// CUSTOM COMPONENTS

import PaymentScrollView from "../components/molecules/payment/PaymentScrollView";
import DispatchFinalPayment from "../components/dispatchers/DispatchFinalPayment";
import BackgroundColors from "../constants/colors/BackgroundColors";
import GlobalFailedButton from "../components/atoms/GlobalFailedButton";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import GlobalLabel from "../components/atoms/GlobalLabel";

const PaymentScreen = (props) => {
  const billPayers = useSelector((state) => state.payers);
  const bill = useSelector((state) => state.bill);
  const [billState, setBillState] = useState({
    billAmount: bill.billAmount,
    numberOfBillPayers: bill.numberOfBillPayers,
  });
  const [billPayersState, setBillPayersState] = useState(billPayers);

  return (
    <View style={styles.screen}>
      <View style={styles.scrollCcontent}>
        <View style={styles.checkPayers}>
          <GlobalLabel content="Your final bill" />
        </View>
        <PaymentScrollView billPayers={billPayersState} bill={billState} />
      </View>
      <View style={styles.buttonsContainer}>
        <DispatchFinalPayment title="Confirm" navigation={props.navigation} />
        <GlobalFailedButton
          title="Go back"
          handleButtonPress={() => {
            props.navigation.navigate(ScreenNavigationScreenNames.payerScreen);
          }}
        />
      </View>
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
  scrollCcontent: {
    height: "80%",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  checkPayers: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PaymentScreen;
