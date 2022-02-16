import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,Dimensions,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import ColorsCollection from "../../../constants/ColorsCollection";
import PlatformsCollection from "../../../constants/PlatformsCollection";

const EditPayerBillAdjustment = (props) => {
  let TouchableWrapper = TouchableOpacity;

  if (Platform.OS === PlatformsCollection.android) {
    TouchableWrapper = TouchableNativeFeedback;
  }

  return (
    <View style={styles.editpayerBillAdjustmentContainer}>
      <View style={styles.editPayerChild}>
        <View style={styles.infoChild}>
          <Text style={styles.infoTextHeader}>Adjusting bill for</Text>
          <Text style={styles.infoText}>{props.editedPayer.payerName}</Text>
          <Text style={styles.infoText}>
            Paying:
            <Text style={styles.infoChildNested}>
              {props.editedPayer.payerAmount}
            </Text>
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoChildNested}>
              {props.editedPayer.payerPayingPercent}
            </Text>
            of total
          </Text>
        </View>

        <View style={styles.infoChild}>
          <Text style={styles.infoTextHeader}>With</Text>
          <Text style={styles.infoText}>{props.adjustmentPayer.payerName}</Text>
          <Text style={styles.infoText}>
            Paying:<Text>{props.adjustmentPayer.payerAmount}</Text>
          </Text>
          <Text style={styles.infoText}>
            <Text>{props.adjustmentPayer.payerPayingPercent}</Text> of total
          </Text>
        </View>
      </View>
      <View style={styles.editPayerChild}>
        <TouchableWrapper onPress={props.handlePayMoreButtonPress}>
          <View style={styles.increaseAmount}>
            <Text style={styles.plusMinusText}>
              Pay More <AntDesign name="plus" size={24} color="white" />
            </Text>
          </View>
        </TouchableWrapper>
        <TouchableWrapper onPress={props.handlePayLessButtonPress}>
          <View style={styles.decreaseAmount}>
            <Text style={styles.plusMinusText}>
              Pay Less <AntDesign name="minus" size={24} color="white" />
            </Text>
          </View>
        </TouchableWrapper>
      </View>
      <View style={styles.editPayerChild}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  editpayerBillAdjustmentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  editPayerChild: {
    flexDirection: "row",
    margin: 10,
    borderRadius: 8,
  },
  increaseAmount: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: ColorsCollection.green,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  decreaseAmount: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: ColorsCollection.red,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  plusMinusText: {
    color: "white",
  },
  infoChild: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#D1D1D1",
    backgroundColor: ColorsCollection.secondary,
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 20,
    width: "40%",
    alignItems: "center",
  },
  infoTextHeader: {
    fontSize: Dimensions.get("window").width / 22,
    fontWeight: "bold",
    textDecorationLine: "underline",
    paddingBottom: 10,
  },
  submitButtonContainer: {
    backgroundColor: ColorsCollection.primary,
  },
  submitButtonText: {
    color: ColorsCollection.light,
  },
});

export default EditPayerBillAdjustment;
