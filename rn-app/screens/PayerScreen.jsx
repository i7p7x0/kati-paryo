import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import { useSelector } from "react-redux";
import Payer from "../model/Payer";

// CUSTOM COMPONENTS
import BillPayer from "../components/molecules/BillPayer";
import PayerScrollView from "../components/molecules/PayerScrollView";

const PayerScreen = (props) => {
  const bill = useSelector((state) => state.bill);
  const payers = [];

  for (let i = 1; i <= bill.numberOfBillPayers; i++) {
    payers.push(
      new Payer(
        i,
        "payer " + i,
        (bill.billAmount / bill.numberOfBillPayers).toFixed(2),
        (((bill.billAmount/bill.numberOfBillPayers)/bill.billAmount)*100).toFixed(2)
      )
    );
  }

  const [payersState, setPayersState] = useState(payers);

  return (
    <View style={styles.screen}>
      {/* <View>
        <Text>Total: {bill.billAmount}</Text>
        <Text>Number fo Payers: {bill.numberOfBillPayers}</Text>
      </View> */}
      <PayerScrollView payerData={payersState} navigation={props.navigation}/>
     
      <Button
        title="go back"
        onPress={() => {
          props.navigation.navigate(ScreenNavigationScreenNames.homeScreen);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PayerScreen;
