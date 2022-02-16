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
import LabelColors from "../../../constants/colors/LabelColors";
import PlatformsCollection from "../../../constants/PlatformsCollection";
import ScreenNavigationSCreenNames from "../../../constants/ScreenNavigationScreenNames";

const BillPayer = (props) => {
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
      <View style={styles.screen}>
        <View style={styles.payerIdentityContainer}>
          <View style={styles.child}>
            <Octicons name="octoface" size={24} />
          </View>
          <View style={(styles.child, styles.nameChild)}>
            <Text style={styles.regular}>Payer:</Text>
            <Text style={styles.payerName}>{props.payerName}</Text>
          </View>
        </View>

        <View style={styles.amountsContainer}>
          <View style={styles.child}>
            <Text
              style={{
                fontSize: Dimensions.get("window").width / 22,
                fontWeight: "bold",
              }}
            >
              Amount: {props.payerAmount}
            </Text>
          </View>
          <View style={styles.child}>
            <Text style={styles.regular}>|</Text>
          </View>
          <View style={styles.child}>
            <Text style={styles.regular}>
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
  screen: {
    backgroundColor: LabelColors.labelWhite,
    paddingHorizontal: Dimensions.get("window").width / 10,
    paddingVertical: Dimensions.get("window").height / 50,
    marginHorizontal: Dimensions.get("window").width / 80,
    marginVertical: Dimensions.get("window").height / 80,
    justifyContent: "center",
    width: Platform.OS === PlatformsCollection.android ? "90%" : "90%",
    borderRadius: 8,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#D1D1D1",
  },
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
  payerName: {
    fontSize: Dimensions.get("window").width / 22,
    textDecorationLine: "underline",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  regular: {
    fontSize: Dimensions.get("window").width / 22,
    fontWeight: "bold",
  },
});

export default BillPayer;
