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

const DispatchFinalPayment = (props) => {
  const dispatch = useDispatch();
  let TouchableWrapper = TouchableOpacity;
  if (Platform.OS === PlatformsCollection.android) {
    TouchableWrapper = TouchableNativeFeedback;
  }

  const handleDispatchAction = () => {
    // dispatch(billActions.removeBill());
    dispatch(payersActions.removePayer());
    Alert.alert("Done");
    props.navigation.navigate(ScreenNavigationScreenNames.homeScreen);
  };

  return (
    <TouchableWrapper onPress={handleDispatchAction} disabled={false}>
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
  styleButtonText: {},
  disabledButton: {
    backgroundColor: "#EBEBE4",
  },
  disabledButtonText: {
    color: "black",
  },
});

export default DispatchFinalPayment;
