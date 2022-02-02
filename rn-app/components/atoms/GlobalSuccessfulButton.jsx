import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

import PlatformsCollection from "../../constants/PlatformsCollection";
import ButtonsColors from "../../constants/colors/ButtonsColors";

const GlobalSuccessfulButton = (props) => {
  let TouchableWrapper = TouchableOpacity;
  if (Platform.OS === PlatformsCollection.android) {
    TouchableWrapper = TouchableNativeFeedback;
  }
  return (
    <TouchableWrapper
      onPress={props.handleButtonPress}
      disabled={props.disabled || false}
    >
      <View style={styles.styleButtonContainer}>
        <Text style={styles.styleButtonText}>{props.title}</Text>
      </View>
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
  styleButtonText: { fontWeight: "bold", fontSize: 18, color: "black" },
});

export default GlobalSuccessfulButton;
