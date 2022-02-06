import React from "react";
import { StyleSheet, Alert } from "react-native";

import * as billActions from "../../store/actions/Bill";
import * as payersActions from "../../store/actions/Payers";
import { useDispatch } from "react-redux";
import GlobalSuccessfulButton from "../atoms/GlobalSuccessfulButton";
import ScreenNavigationScreenNames from "../../constants/ScreenNavigationScreenNames";

const DispatchFinalPayment = (props) => {
  const dispatch = useDispatch();

  const handleDispatchAction = () => {
    dispatch(billActions.removeBill());
    dispatch(payersActions.removePayer());
    Alert.alert("Done!", "Completed Payment");
    props.navigation.navigate(ScreenNavigationScreenNames.homeScreen);
  };

  return (
    <GlobalSuccessfulButton
      title={props.title}
      handleButtonPress={handleDispatchAction}
    />
  );
};
const styles = StyleSheet.create({});

export default DispatchFinalPayment;
