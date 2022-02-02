import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import BillPayer from "./BillPayer";

const PayerScrollView = (props) => {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      {props.payerData.map((payer) => {
        return (
          <BillPayer
            key={payer.payerId}
            payerId={payer.payerId}
            payerName={payer.payerName}
            payerAmount={payer.payerAmount}
            payerPayingPercent={payer.payerPayingPercent}
            randomNumber={(Math.floor(Math.random() * 10) + 1).toString()}
            navigation={props.navigation}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
  },
});

export default PayerScrollView;
