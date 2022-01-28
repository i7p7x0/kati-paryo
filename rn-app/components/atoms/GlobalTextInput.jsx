import React from "react";
import {
  View,
  TextInput,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

// CUSTOM COMPONENTS

import ColorsCollection from "../../constants/ColorsCollection";

const GlobalTextInput = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.GlobalTextInputContainer}>
        <TextInput
          placeholder="Enter Text Here"
          style={styles.GlobalTextInput}
          keyboardType="decimal-pad"
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
