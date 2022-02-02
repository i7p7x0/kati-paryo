import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import GlobalLabel from "../atoms/GlobalLabel";

import GlobalSuccessfulButton from "../atoms/GlobalSuccessfulButton";
import GlobalFailedButton from "../atoms/GlobalFailedButton";
import * as payerActions from "../../store/actions/Payers";
import ScreenNavigationScreenNames from "../../constants/ScreenNavigationScreenNames";
const DispatchRoundBill = (props) => {
  const dispatch = useDispatch();
  const bill = useSelector((state) => state.bill);

  const handleYesPress = () => {
    dispatch(payerActions.roundBill(props.billPayers, bill.billAmount));
    props.closeModal();
    props.navigation.navigate(ScreenNavigationScreenNames.paymentScreen);
  };
  const handleNoPress = () => {
    props.closeModal();
    props.navigation.navigate(ScreenNavigationScreenNames.paymentScreen);
  };

  return (
    <View style={styles.screen}>
      <View>
        <GlobalLabel content="Round bill payment amounts?" />
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});

export default DispatchRoundBill;
