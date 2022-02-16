import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import * as payersActions from "../../store/actions/Payers";
import { useDispatch } from "react-redux";
import ScreenNavigationScreenNames from "../../constants/ScreenNavigationScreenNames";
import PlatformsCollection from "../../constants/PlatformsCollection";
import ButtonsColors from "../../constants/colors/ButtonsColors";

const DispatchFinalPayerButton = (props) => {
  const dispatch = useDispatch();
  let TouchableWrapper = TouchableOpacity;
  if (Platform.OS === PlatformsCollection.android) {
    TouchableWrapper = TouchableNativeFeedback;
  }

  const handleDispatchAction = () => {
    let updatedPayers = props.payerData.otherPayers.filter((filteredPayers) => {
      return filteredPayers.payerId !== props.payerData.adjustmentPayer.payerId;
    });
    if (props.payerData.adjustmentPayer !== "") {
      updatedPayers.push(props.payerData.adjustmentPayer);
    }

    updatedPayers.push(props.payerData.editedPayer);

    dispatch(
      payersActions.updatePayers(
        updatedPayers.sort((a, b) => (a.payerId > b.payerId ? 1 : -1))
      )
    );

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
            {props.title}
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
  disabledButton: {
    backgroundColor: ButtonsColors.disabled,
  },
  styleButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DispatchFinalPayerButton;
