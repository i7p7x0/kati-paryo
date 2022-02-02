import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// custom Components

import ColorsCollection from "../../../constants/ColorsCollection";
import GlobalButton from "../../atoms/GlobalButton";
import GlobalLabel from "../../atoms/GlobalLabel";

const NumberOfBillPayersSelector = (props) => {
  return (
    <View style={styles.screen}>
      <GlobalLabel content="Select number of payers" />
      {props.NUMBER_OF_PAYERS.length >= 2 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.NUMBER_OF_PAYERS.filter(
            (filteredData) => filteredData.id <= 2
          ).map((data) => {
            return (
              <GlobalButton
                styleButtonContainer={styles.selectBillPayersButtonContainer}
                styleButtonText={styles.selectBillPayersButtonText}
                title={data.id}
                key={data.id}
                handleButtonPress={() => {
                  props.handleSelectBillPayersPress(data.id);
                }}
              />
            );
          })}
        </ScrollView>
      ) : null}
      {props.NUMBER_OF_PAYERS.length >= 4 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.NUMBER_OF_PAYERS.filter(
            (filteredData) => filteredData.id <= 4 && filteredData.id > 2
          ).map((data) => {
            return (
              <GlobalButton
                styleButtonContainer={styles.selectBillPayersButtonContainer}
                styleButtonText={styles.selectBillPayersButtonText}
                title={data.id}
                key={data.id}
                handleButtonPress={() => {
                  props.handleSelectBillPayersPress(data.id);
                }}
              />
            );
          })}
        </ScrollView>
      ) : null}
      {props.NUMBER_OF_PAYERS.length >= 6 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.NUMBER_OF_PAYERS.filter(
            (filteredData) => filteredData.id <= 6 && filteredData.id > 4
          ).map((data) => {
            return (
              <GlobalButton
                styleButtonContainer={styles.selectBillPayersButtonContainer}
                styleButtonText={styles.selectBillPayersButtonText}
                title={data.id}
                key={data.id}
                handleButtonPress={() => {
                  props.handleSelectBillPayersPress(data.id);
                }}
              />
            );
          })}
        </ScrollView>
      ) : null}
      {props.NUMBER_OF_PAYERS.length >= 8 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.NUMBER_OF_PAYERS.filter(
            (filteredData) => filteredData.id <= 8 && filteredData.id > 6
          ).map((data) => {
            return (
              <GlobalButton
                styleButtonContainer={styles.selectBillPayersButtonContainer}
                styleButtonText={styles.selectBillPayersButtonText}
                title={data.id}
                key={data.id}
                handleButtonPress={() => {
                  props.handleSelectBillPayersPress(data.id);
                }}
              />
            );
          })}
        </ScrollView>
      ) : null}
      {props.NUMBER_OF_PAYERS.length >= 10 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.NUMBER_OF_PAYERS.filter(
            (filteredData) => filteredData.id <= 10 && filteredData.id > 8
          ).map((data) => {
            return (
              <GlobalButton
                styleButtonContainer={styles.selectBillPayersButtonContainer}
                styleButtonText={styles.selectBillPayersButtonText}
                title={data.id}
                key={data.id}
                handleButtonPress={() => {
                  props.handleSelectBillPayersPress(data.id);
                }}
              />
            );
          })}
        </ScrollView>
      ) : null}
      {props.NUMBER_OF_PAYERS.length > 10 ? (
        <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
          {props.NUMBER_OF_PAYERS.filter(
            (filteredData) => filteredData.id === "more..."
          ).map((data) => {
            return (
              <GlobalButton
                styleButtonContainer={styles.selectBillPayersButtonContainer}
                styleButtonText={styles.selectBillPayersButtonText}
                title={data.id}
                key={data.id}
                handleButtonPress={() => {
                  props.handleSelectBillPayersPress(data.id);
                }}
              />
            );
          })}
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectBillPayersButtonContainer: {
    backgroundColor: ColorsCollection.tertiary,
  },
  selectBillPayersButtonText: {
    color: ColorsCollection.light,
  },
});

export default NumberOfBillPayersSelector;