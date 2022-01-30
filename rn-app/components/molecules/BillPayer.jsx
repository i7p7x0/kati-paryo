import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from "react-native";
import { Octicons } from "@expo/vector-icons";

// CUSTOM COMPONENTS
import PayerAvatarColors from "../../constants/PayerAvatarColors";
import PlatformsCollection from "../../constants/PlatformsCollection";
import ScreenNavigationSCreenNames from "../../constants/ScreenNavigationScreenNames";

const BillPayer = (props) => {
  let randomGeneratedColor = PayerAvatarColors.find(
    (randomColor) => randomColor.id === props.randomNumber
  );

  let TouchableWrapper = TouchableOpacity;

  if (Platform.OS === PlatformsCollection.android) {
    TouchableWrapper = TouchableNativeFeedback;
  }

  return (
    <TouchableWrapper
      key={props.payerId}
      onPress={() => {
        props.navigation.navigate(ScreenNavigationSCreenNames.editPayerScreen, {
          payerId: props.payerId,
        });
      }}
    >
      <View
        style={{
          backgroundColor: randomGeneratedColor.colorCode,
          margin: 12,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",

          borderRadius: 8,
        }}
      >
        <View>
          <Octicons
            name="octoface"
            size={24}
            color={randomGeneratedColor.id > 5 ? "#FFFFFF" : "#000000"}
          />
        </View>
        <View>
          <Text
            style={{
              color: randomGeneratedColor.id > 5 ? "#FFFFFF" : "#000000",
              fontSize: 16,
            }}
          >
            {props.payerName}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: randomGeneratedColor.id > 5 ? "#FFFFFF" : "#000000",
              fontSize: 16,
            }}
          >
            Amount: {props.payerAmount}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: randomGeneratedColor.id > 5 ? "#FFFFFF" : "#000000",
              fontSize: 16,
            }}
          >
            Paying: {props.payerPayingPercent}%
          </Text>
        </View>
      </View>
    </TouchableWrapper>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    margin: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default BillPayer;
