import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

// CUSTOM COMPONENTS

import PaymentScrollView from "../components/molecules/payment/PaymentScrollView";
import DispatchFinalPayment from "../components/dispatchers/DispatchFinalPayment";
import ColorsCollection from "../constants/ColorsCollection";
import GlobalButton from "../components/atoms/GlobalButton";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";

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
        <PaymentScrollView billPayers={billPayersState} bill={billState} />
      </View>
      <View style={styles.buttonsContainer}>
        <DispatchFinalPayment
          title="Confirm"
          styleButtonContainer={styles.submitButton}
          styleButtonText={styles.submitText}
          navigation={props.navigation}
        />
        <GlobalButton
          styleButtonContainer={styles.submitButton}
          styleButtonText={styles.submitText}
          title="Revert"
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollCcontent: {
    height: "60%",
  },
  submitButton: {
    backgroundColor: ColorsCollection.primary,
  },
  submitText: { color: ColorsCollection.light },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default PaymentScreen;
