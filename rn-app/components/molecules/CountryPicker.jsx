import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";

import { useSelector } from "react-redux";

// CUSTOM COMPONENTS

import CountryItem from "../atoms/CountryItem";
import ColorsCollection from "../../constants/ColorsCollection";
import GlobalSearch from "../atoms/GlobalSearch";

const CountryPicker = (props) => {
  const countryList = useSelector((state) => state.country.filteredCountries);

  

  const [modalOpenState, setModalOpenState] = useState(false);

  const handleSelectCountryPress = () => {
    setModalOpenState(!modalOpenState);
  };

  return (
    <TouchableOpacity onPress={handleSelectCountryPress}>
      <View style={styles.countryPickerContainer}>
        <Text style={styles.countryPickerText}>Select Country</Text>
        <Modal visible={modalOpenState} animationType="slide">
          <GlobalSearch />
          <FlatList
            data={countryList}
            keyExtractor={(item) => item.countryName}
            renderItem={(itemData) => {
              return (
                <CountryItem
                  handleSelectCountryPress={handleSelectCountryPress}
                  countryName={itemData.item.countryName}
                  currencyCode={itemData.item.currencyCode}
                />
              );
            }}
          />
        </Modal>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  countryPickerContainer: {
    backgroundColor: ColorsCollection.backgroundDarkPrimary,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,
    padding: 10,
    width: 150,
  },
  countryPickerText: {
    color: ColorsCollection.lightTextColorPrimary,
  },
});

export default CountryPicker;
