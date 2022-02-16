import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

// CUSTOM COMPONENTS
import BackgroundColors from "../../../constants/colors/BackgroundColors";
import GlobalLabel from "../../atoms/GlobalLabel";
import FontColors from "../../../constants/colors/FontColors";

const LargePayerComponent = (props) => {
  return (
    <React.Fragment>
      <GlobalLabel content="Your Bill" />
      <View style={styles.screen}>
        <View style={styles.screenChild}>
          <Text style={styles.text}>Total bill</Text>
          <Text style={styles.text}> : </Text>
          <Text style={styles.textVariable}> {props.bill.billAmount}</Text>
        </View>
        <View style={styles.screenChild}>
          <Text style={styles.text}>Number of payers </Text>
          <Text style={styles.text}> : </Text>
          <Text style={styles.textVariable}>
            {props.bill.numberOfBillPayers}
          </Text>
        </View>
        <View style={styles.screenChild}>
          <Text style={styles.text}>Per person</Text>
          <Text style={styles.text}> : </Text>
          <Text style={styles.textVariable}>
            {(props.bill.billAmount / props.bill.numberOfBillPayers).toFixed(2)}
          </Text>
          <Text style={styles.text}> | </Text>
          <Text style={styles.textVariable}>
            {(
              (props.bill.billAmount /
                props.bill.numberOfBillPayers /
                props.bill.billAmount) *
              100
            ).toFixed(2)}
          </Text>
          <Text style={styles.text}> % </Text>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: BackgroundColors.lightYellow,

    paddingHorizontal: Dimensions.get("window").width / 40,
    paddingVertical: Dimensions.get("window").height / 50,
    width: (80 / 100) * Dimensions.get("window").width,
    borderRadius: 8,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  screenChild: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: Dimensions.get("window").width / 22,
    fontWeight: "bold",
  },
  textVariable: {
    fontSize: Dimensions.get("window").width / 22,
    fontWeight: "bold",
    fontStyle: "italic",
    color: FontColors.money,
  },
});

export default LargePayerComponent;
