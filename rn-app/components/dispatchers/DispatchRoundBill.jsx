import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import GlobalLabel from "../atoms/GlobalLabel";
import GlobalWarning from "../atoms/GlobalWarning";
import GlobalSuccessfulButton from "../atoms/GlobalSuccessfulButton";
import GlobalFailedButton from "../atoms/GlobalFailedButton";
import * as payerActions from "../../store/actions/Payers";
import ScreenNavigationScreenNames from "../../constants/ScreenNavigationScreenNames";
import BackgroundColors from "../../constants/colors/BackgroundColors";

const DispatchRoundBill = (props) => {
  const dispatch = useDispatch();
  const bill = useSelector((state) => state.bill);

  const handleYesPress = () => {
    dispatch(payerActions.roundBill(props.billPayers, bill.billAmount));
    props.closeModal();
    if (bill.numberOfBillPayers <= 10) {
      props.navigation.navigate(ScreenNavigationScreenNames.paymentScreen);
    } else if (bill.numberOfBillPayers > 10) {
      Alert.alert("Done!", "We hope it helped answer your 'KATI PARYO?'");
    }
  };
  const handleNoPress = () => {
    props.closeModal();
    if (bill.numberOfBillPayers <= 10) {
      props.navigation.navigate(ScreenNavigationScreenNames.paymentScreen);
    } else if (bill.numberOfBillPayers > 10) {
      Alert.alert("Done!", "We hope it helped answer your 'KATI PARYO?'");
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <GlobalLabel content="Split bill in multiples of 5?" />
        <GlobalWarning content="This will adjust the bill so that everyone pays an amount that is a multiple of 5. However, one person will end up paying slightly more because the accumulated leftovers are added to their total." />
      </View>
      <View style={styles.buttonsContainer}>
        <GlobalSuccessfulButton
          handleButtonPress={handleYesPress}
          title="Yes"
        />
        <GlobalFailedButton handleButtonPress={handleNoPress} title="No" />
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
  buttonsContainer: {
    flexDirection: "row",
  },
  textContainer: {
    width: "80%",
  },
});

export default DispatchRoundBill;
