import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";

// CUSTOM COMPONENTS

import GlobalLabel from "../../atoms/GlobalLabel";
import LabelColors from "../../../constants/colors/LabelColors";

const PaymentScrollView = (props) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.listContainer}>
        {props.billPayers.map((billPayer) => {
          return (
            <View key={billPayer.payerId} style={styles.billPayerContainer}>
              <View>
                <Text style={styles.text}>{billPayer.payerName}</Text>
              </View>
              <View style={styles.statsContainer}>
                <View>
                  <Text style={styles.text}>
                    paying:{billPayer.payerAmount}
                  </Text>
                </View>
                <View>
                  <Text style={styles.text}> | </Text>
                </View>
                <View>
                  <Text style={styles.text}>
                    {billPayer.payerPayingPercent}
                  </Text>
                </View>
                <View>
                  <Text style={styles.text}>%</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.billContainer}>
        <View>
          <GlobalLabel content={"Total :" + props.bill.billAmount} />
        </View>
        <View>
          <GlobalLabel
            content={"No. of Payers :" + props.bill.numberOfBillPayers}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  billPayerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Dimensions.get("window").height / 80,
    marginHorizontal: Dimensions.get("window").width / 80,
    paddingVertical: Dimensions.get("window").height / 60,
    paddingHorizontal: Dimensions.get("window").width / 10,
    borderRadius: 8,
    backgroundColor: LabelColors.labelYellow,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: "#D1D1D1",
  },
  billContainer: {
    flexDirection: "row",
  },
  markAllAsPaidContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,

    marginVertical: Dimensions.get("window").height / 80,
    marginHorizontal: Dimensions.get("window").width / 80,
    paddingVertical: Dimensions.get("window").height / 100,
    paddingHorizontal: Dimensions.get("window").width / 40,
  },
  text: {
    color: LabelColors.labelBlack,
    fontWeight: "bold",
    fontSize: 18,
  },
  markAllChild: {
    paddingHorizontal: Dimensions.get("window").width / 40,
  },

  listContainer: {},
  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PaymentScrollView;
