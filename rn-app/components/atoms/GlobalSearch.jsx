import React, { useState } from "react";
import {
  View,
  TextInput,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import * as countryActions from "../../store/actions/country";
// CUSTOM COMPONENTS

import ColorsCollection from "../../constants/ColorsCollection";

const GlobalTextInput = (props) => {
  const dispatch = useDispatch();
  const [searchedCountry, setSearchedCountry] = useState("");

  const handleTextChange = (text) => {
    dispatch(countryActions.filterCountry(text));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.GlobalTextInputContainer}>
        <TextInput
          placeholder="Search for country"
          style={styles.GlobalTextInput}
          keyboardType={props.keyboardType}
          onChangeText={handleTextChange}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  GlobalTextInputContainer: {
    padding: 20,
  },
  GlobalTextInput: {
    borderBottomWidth: 2,
    borderColor: ColorsCollection.borderDarkPrimary,
    padding: 5,
  },
});

export default GlobalTextInput;
