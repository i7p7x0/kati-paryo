import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const GlobalTextInput = (props) => {
  const handleChangeText = (text) => {
    props.handleChangeText(text);
  };

  return (
    <View style={styles.inputAmount}>
      <TextInput
        style={styles.amountTextInput}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        onChangeText={handleChangeText}
        onPressIn={() => {
          console.log("Hello");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  amountTextInput: {
    borderBottomWidth: 2,
    marginVertical: 10,
  },
});

export default GlobalTextInput;
