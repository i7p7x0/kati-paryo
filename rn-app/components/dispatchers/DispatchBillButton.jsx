import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import * as billActions from "../../store/actions/Bill";
import * as payersActions from "../../store/actions/Payers";
import { useDispatch } from "react-redux";
import ScreenNavigationScreenNames from "../../constants/ScreenNavigationScreenNames";
import PlatformsCollection from "../../constants/PlatformsCollection";
import * as validationInputs from "../../validations/validateInputs";
import { Entypo } from "@expo/vector-icons";

const DispatchBillButton = (props) => {
  const dispatch = useDispatch();
  let TouchableWrapper = TouchableOpacity;
  if (Platform.OS === PlatformsCollection.android) {
    TouchableWrapper = TouchableNativeFeedback;
  }

  const handleDispatchAction = () => {
    if (
      !validationInputs.checkValidAmount(props.bill.billAmount) ||
      !validationInputs.checkValidNumberOfPayers(props.bill.numberOfBillPayers)
    ) {
      Alert.alert("Invalid Input");
      return;
    }
    switch (props.dispatchAction) {
      case billActions.ADD_BILL:
        dispatch(
          billActions.addBill(
            props.bill.billAmount,
            props.bill.numberOfBillPayers
          )
        );
        dispatch(
          payersActions.createPayers(
            props.bill.billAmount,
            props.bill.numberOfBillPayers
          )
        );

      // props.handleResetStates();
    }

    props.navigation.navigate(ScreenNavigationScreenNames.payerScreen);
  };

  return (
    <TouchableWrapper
      onPress={handleDispatchAction}
      disabled={props.disabled || false}
    >
      {props.disabled ? (
        <View style={[styles.styleButtonContainer, styles.disabledButton]}>
          <Text style={(styles.styleButtonText, styles.disabledButtonText)}>
            {props.title} <Entypo name="block" size={24} color="black" />
          </Text>
        </View>
      ) : (
        <View style={[styles.styleButtonContainer, props.styleButtonContainer]}>
          <Text style={(styles.styleButtonText, props.styleButtonText)}>
            {props.title}
          </Text>
        </View>
      )}
    </TouchableWrapper>
  );
};
const styles = StyleSheet.create({
  styleButtonContainer: {
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  styleButtonText: {},
  disabledButton: {
    backgroundColor: "#EBEBE4",
  },
  disabledButtonText: {
    color: "black",
  },
});

export default DispatchBillButton;
