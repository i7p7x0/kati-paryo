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

const DispatchFinalPayerButton = (props) => {
  const dispatch = useDispatch();
  let TouchableWrapper = TouchableOpacity;
  if (Platform.OS === PlatformsCollection.android) {
    TouchableWrapper = TouchableNativeFeedback;
  }

  const handleDispatchAction = () => {
    props.navigation.navigate(ScreenNavigationScreenNames.paymentScreen);
  };

  return (
    <TouchableWrapper
      onPress={handleDispatchAction}
      disabled={props.disabled || false}
    >
      <View style={[styles.styleButtonContainer, props.styleButtonContainer]}>
        <Text style={(styles.styleButtonText, props.styleButtonText)}>
          {props.title}
        </Text>
      </View>
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
});

export default DispatchFinalPayerButton;
