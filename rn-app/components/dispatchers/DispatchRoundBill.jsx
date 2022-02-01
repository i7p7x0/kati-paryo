import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import GlobalLabel from "../atoms/GlobalLabel";
import GlobalButton from "../atoms/GlobalButton";
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
        <GlobalButton
          handleButtonPress={handleYesPress}
          title="Yes"
          styleButtonContainer={props.styleButtonContainer}
          styleButtonText={props.styleButtonText}
        />
        <GlobalButton
          handleButtonPress={handleNoPress}
          title="No"
          styleButtonContainer={props.styleButtonContainer}
          styleButtonText={props.styleButtonText}
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
  buttonsContainer: {
    flexDirection: "row",
  },
});

export default DispatchRoundBill;
