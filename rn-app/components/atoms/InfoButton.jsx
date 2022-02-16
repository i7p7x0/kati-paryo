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
import { Ionicons } from "@expo/vector-icons";
import LabelColors from "../../constants/colors/LabelColors";

const InfoButton = (props) => {
  let TouchableWrapper = TouchableOpacity;
  if (Platform.OS === PlatformsCollection.android) {
    TouchableWrapper = TouchableNativeFeedback;
  }
  return (
    <TouchableWrapper onPress={props.handleButtonPress}>
      <View style={styles.styleButtonContainer}>
        <Ionicons
          name="information-circle"
          size={32}
          color={LabelColors.labelWhite}
        />
      </View>
    </TouchableWrapper>
  );
};
const styles = StyleSheet.create({
  styleButtonContainer: {
    borderRadius: 8,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  styleDisabledButtonContainer: {
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
  styleButtonText: {
    fontWeight: "bold",
    fontSize: Dimensions.get("window").width / 22,
    color: "black",
  },
});

export default InfoButton;
