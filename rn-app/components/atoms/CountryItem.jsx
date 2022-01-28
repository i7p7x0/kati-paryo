import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// CUSTOM COMPONENTS

import ColorsCollection from "../../constants/ColorsCollection";

const CountryItem = (props) => {
  return (
    <TouchableOpacity onPress={props.handleSelectCountryPress}>
      <View style={styles.countryItemContainer}>
        <Text style={styles.countryItemText}>{props.countryName} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  countryItemContainer: {
    backgroundColor: ColorsCollection.backgroundDarkPrimary,
marginHorizontal:20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  countryItemText: {
    color: ColorsCollection.lightTextColorPrimary,
  },
});

export default CountryItem;
