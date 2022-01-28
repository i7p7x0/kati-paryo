import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from "react-native";

// CUSTOM COMPONENTS

import ColorsCollection from "../../constants/ColorsCollection";
import PlatformsCollection from "../../constants/PlatformsCollection";

const GlobalButton = (props) => {
  let TouchableWrapper =
    Platform.OS === PlatformsCollection.android
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <TouchableWrapper onPress={props.handleButtonPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Button</Text>
      </View>
    </TouchableWrapper>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: ColorsCollection.buttonColorPrimary,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: ColorsCollection.lightTextColorPrimary,
  },
});

export default GlobalButton;
