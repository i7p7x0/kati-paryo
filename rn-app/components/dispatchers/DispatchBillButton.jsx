import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Alert,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import * as billActions from "../../store/actions/Bill";
import * as payersActions from "../../store/actions/Payers";
import { useDispatch } from "react-redux";
import ScreenNavigationScreenNames from "../../constants/ScreenNavigationScreenNames";
import PlatformsCollection from "../../constants/PlatformsCollection";
import * as validationInputs from "../../validations/validateInputs";
import ButtonsColors from "../../constants/colors/ButtonsColors";

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

        props.handleResetStates();
    }

    props.navigation.navigate(ScreenNavigationScreenNames.payerScreen);
  };

  return (
    <TouchableWrapper
      onPress={handleDispatchAction}
      disabled={props.disabled || false}
    >
      {props.disabled ? (
        <View style={styles.disabledButton}>
          <Text style={styles.disabledButtonText}>{props.title}</Text>
        </View>
      ) : (
        <View style={styles.styleButtonContainer}>
          <Text style={styles.styleButtonText}>{props.title}</Text>
        </View>
      )}
    </TouchableWrapper>
  );
};
const styles = StyleSheet.create({
  styleButtonContainer: {
    backgroundColor: ButtonsColors.successful,
    borderRadius: 8,
    paddingHorizontal: Dimensions.get("window").width / 10,
    paddingVertical: Dimensions.get("window").height / 50,
    marginHorizontal: Dimensions.get("window").width / 80,
    marginVertical: Dimensions.get("window").height / 80,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  styleButtonText: { color: "black", fontWeight: "bold", fontSize: 18 },
  disabledButton: {
    backgroundColor: ButtonsColors.disabled,
    borderRadius: 8,
    paddingHorizontal: Dimensions.get("window").width / 10,
    paddingVertical: Dimensions.get("window").height / 50,
    marginHorizontal: Dimensions.get("window").width / 80,
    marginVertical: Dimensions.get("window").height / 80,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  disabledButtonText: { color: "black", fontWeight: "bold", fontSize: 18 },
});

export default DispatchBillButton;
