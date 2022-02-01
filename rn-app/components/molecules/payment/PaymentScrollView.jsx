import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";

// CUSTOM COMPONENTS

import TogglePaidCheck from "./TogglePaidCheck";
import GlobalLabel from "../../atoms/GlobalLabel";
import ColorsCollection from "../../../constants/ColorsCollection";

const PaymentScrollView = (props) => {
  const [markAllAsPaidState, setMarkAllAsPaidState] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.checkPayers}>
        <GlobalLabel content="Check payers" />
      </View>
      <View style={styles.listContainer}>
        {props.billPayers.map((billPayer) => {
          return (
            <View key={billPayer.payerId} style={styles.billPayerContainer}>
              <View>
                <Text style={styles.text}>{billPayer.payerName}</Text>
              </View>
              <View>
                <TogglePaidCheck
                  markAllAsPaidState={markAllAsPaidState}
                  toggleMain={false}
                />
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.markAllAsPaidContainer}>
        <View style={styles.markAllChild}>
          <Text style={styles.text}>Mark all as paid</Text>
        </View>
        <View>
          <TogglePaidCheck
            markAllAsPaidState={markAllAsPaidState}
            toggleMain={true}
            handleMarkPress={() => {
              setMarkAllAsPaidState(!markAllAsPaidState);
            }}
          />
        </View>
      </View>
      <View style={styles.billContainer}>
        <View>
          <GlobalLabel content={"Total :" + props.bill.billAmount} />
        </View>
        <View>
          <GlobalLabel content={"Pending :" + props.bill.pending} />
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
    paddingVertical: Dimensions.get("window").height / 100,
    paddingHorizontal: Dimensions.get("window").width / 40,
    borderRadius: 8,
    backgroundColor: ColorsCollection.tertiary,
  },
  billContainer: {
    flexDirection: "row",
  },
  markAllAsPaidContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: ColorsCollection.tertiary,
    marginVertical: Dimensions.get("window").height / 80,
    marginHorizontal: Dimensions.get("window").width / 80,
    paddingVertical: Dimensions.get("window").height / 100,
    paddingHorizontal: Dimensions.get("window").width / 40,
  },
  text: {
    color: ColorsCollection.light,
    fontWeight: "bold",
  },
  markAllChild: {
    paddingHorizontal: Dimensions.get("window").width / 40,
  },
  checkPayers: {
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {},
});

export default PaymentScrollView;
