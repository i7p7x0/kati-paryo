import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from "react-native";
import { Octicons } from "@expo/vector-icons";

// CUSTOM COMPONENTS
import PayerAvatarColors from "../../../constants/PayerAvatarColors"
import PlatformsCollection from "../../../constants/PlatformsCollection";
import ScreenNavigationSCreenNames from "../../../constants/ScreenNavigationScreenNames";

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
          paddingHorizontal: Dimensions.get("window").width / 10,
          paddingVertical: Dimensions.get("window").height / 50,
          marginHorizontal: Dimensions.get("window").width / 80,
          marginVertical: Dimensions.get("window").height / 80,
          justifyContent: "center",

          width: Platform.OS === PlatformsCollection.android ? "90%" : "90%",
          borderRadius: 8,
        }}
      >
        <View style={styles.payerIdentityContainer}>
          <View style={styles.child}>
            <Octicons
              name="octoface"
              size={24}
              color={randomGeneratedColor.id > 5 ? "#FFFFFF" : "#000000"}
            />
          </View>
          <View style={(styles.child, styles.nameChild)}>
            <Text
              style={{
                color: randomGeneratedColor.id > 5 ? "#FFFFFF" : "#000000",
                fontSize: 16,

                fontWeight: "bold",
              }}
            >
              Payer:
            </Text>
            <Text
              style={{
                color: randomGeneratedColor.id > 5 ? "#FFFFFF" : "#000000",
                fontSize: 16,
                textDecorationLine: "underline",
                paddingHorizontal: 10,

                fontWeight: "bold",
              }}
            >
              {props.payerName}
            </Text>
          </View>
        </View>

        <View style={styles.amountsContainer}>
          <View style={styles.child}>
            <Text
              style={{
                color: randomGeneratedColor.id > 5 ? "#FFFFFF" : "#000000",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Amount: {props.payerAmount}
            </Text>
          </View>
          <View style={styles.child}>
            <Text
              style={{
                color: randomGeneratedColor.id > 5 ? "#FFFFFF" : "#000000",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              |
            </Text>
          </View>
          <View style={styles.child}>
            <Text
              style={{
                color: randomGeneratedColor.id > 5 ? "#FFFFFF" : "#000000",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Paying: {props.payerPayingPercent}%
            </Text>
          </View>
        </View>
        <View></View>
      </View>
    </TouchableWrapper>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    paddingHorizontal: Dimensions.get("window").width / 10,
    paddingVertical: Dimensions.get("window").height / 50,
    marginHorizontal: Dimensions.get("window").width / 80,
    marginVertical: Dimensions.get("window").height / 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 8,
  },
  payerIdentityContainer: {
    flexDirection: "row",
  },
  amountsContainer: {
    flexDirection: "row",
  },
  child: { paddingHorizontal: 10 },
  nameChild: { flexDirection: "row" },
});

export default BillPayer;
