import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// custom Components

import ColorsCollection from "../../constants/ColorsCollection";
import GlobalButton from "../atoms/GlobalButton";

const HorizontalNumberOfPeopleSelector = (props) => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={{ flexDirection: "row" }}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {props.NUMBER_OF_PAYERS.filter((filterData) => filterData.id <= 4).map(
          (data) => {
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
          }
        )}
      </ScrollView>
      <ScrollView
        contentContainerStyle={{ flexDirection: "row" }}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {props.NUMBER_OF_PAYERS.filter(
          (filterData) => filterData.id > 4 && filterData.id <= 8
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
      <ScrollView
        contentContainerStyle={{ flexDirection: "row" }}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {props.NUMBER_OF_PAYERS.filter(
          (filterData) => filterData.id > 8 || filterData.id === "more..."
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
    </View>
  );
};

const styles = StyleSheet.create({
  selectBillPayersButtonContainer: {
    backgroundColor: ColorsCollection.tertiary,
  },
  selectBillPayersButtonText: {
    color: ColorsCollection.light,
  },
});

export default HorizontalNumberOfPeopleSelector;
