import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import BillPayer from "./BillPayer";

const PayerScrollView = (props) => {
  return (
    <View style={{ width: "80%" }}>
      {props.payerData.length >= 1 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.payerData
            .filter((filterData) => filterData.payerId <= 2)
            .map((payer) => {
              return (
                <BillPayer
                  key={payer.payerId}
                  payerName={payer.payerName}
                  payerAmount={payer.payerAmount}
                  payerPayingPercent={payer.payerPayingPercent}
                  randomNumber={(Math.floor(Math.random() * 10) + 1).toString()}
                  navigation={props.navigation}
                />
              );
            })}
        </ScrollView>
      ) : null}
      {props.payerData.length >= 3 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.payerData
            .filter(
              (filterData) => filterData.payerId > 2 && filterData.payerId <= 4
            )
            .map((payer) => {
              return (
                <BillPayer
                  key={payer.payerId}
                  payerName={payer.payerName}
                  payerAmount={payer.payerAmount}
                  payerPayingPercent={payer.payerPayingPercent}
                  randomNumber={(Math.floor(Math.random() * 10) + 1).toString()}
                  navigation={props.navigation}
                />
              );
            })}
        </ScrollView>
      ) : null}
      {props.payerData.length >= 5 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.payerData
            .filter(
              (filterData) => filterData.payerId > 4 && filterData.payerId <= 6
            )
            .map((payer) => {
              return (
                <BillPayer
                  key={payer.payerId}
                  payerName={payer.payerName}
                  payerAmount={payer.payerAmount}
                  payerPayingPercent={payer.payerPayingPercent}
                  randomNumber={(Math.floor(Math.random() * 10) + 1).toString()}
                  navigation={props.navigation}
                />
              );
            })}
        </ScrollView>
      ) : null}
      {props.payerData.length >= 7 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.payerData
            .filter(
              (filterData) => filterData.payerId > 6 && filterData.payerId <= 8
            )
            .map((payer) => {
              return (
                <BillPayer
                  key={payer.payerId}
                  payerName={payer.payerName}
                  payerAmount={payer.payerAmount}
                  payerPayingPercent={payer.payerPayingPercent}
                  randomNumber={(Math.floor(Math.random() * 10) + 1).toString()}
                  navigation={props.navigation}
                />
              );
            })}
        </ScrollView>
      ) : null}
      {props.payerData.length >= 9 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.payerData
            .filter(
              (filterData) => filterData.payerId > 8 && filterData.payerId <= 10
            )
            .map((payer) => {
              return (
                <BillPayer
                  key={payer.payerId}
                  payerName={payer.payerName}
                  payerAmount={payer.payerAmount}
                  payerPayingPercent={payer.payerPayingPercent}
                  randomNumber={(Math.floor(Math.random() * 10) + 1).toString()}
                  navigation={props.navigation}
                />
              );
            })}
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default PayerScrollView;
