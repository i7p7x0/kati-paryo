import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import * as countryActions from "../../store/actions/country";
// CUSTOM COMPONENTS

import ColorsCollection from "../../constants/ColorsCollection";

const CountryItem = (props) => {
  const dispacth = useDispatch();
  const handleCountryItemSelectPress = () => {
    dispacth(
      countryActions.selectCountry(props.countryName, props.currencyCode)
    );
    props.handleSelectCountryPress();
  };

  return (
    <TouchableOpacity onPress={handleCountryItemSelectPress}>
      <View style={styles.countryItemContainer}>
        <Text style={styles.countryItemText}>{props.countryName} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  countryItemContainer: {
    backgroundColor: ColorsCollection.backgroundDarkPrimary,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  countryItemText: {
    color: ColorsCollection.lightTextColorPrimary,
  },
});

export default CountryItem;
