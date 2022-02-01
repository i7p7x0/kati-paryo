import React from "react";
import { TextInput, View,Dimensions, StyleSheet } from "react-native";

const GlobalTextInput = (props) => {
  const handleChangeText = (text) => {
    props.handleChangeText(text);
  };

  return (
    <View style={styles.inputAmount}>
      <TextInput
        style={styles.amountTextInput}
        textAlign={"center"}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        onChangeText={handleChangeText}
        onPressIn={() => {
          console.log("Hello");
        }}
        value={props.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  amountTextInput: {
    borderBottomWidth: 2,
    paddingHorizontal: Dimensions.get("window").width / 80,
    paddingVertical: Dimensions.get("window").height / 80,
    marginHorizontal: Dimensions.get("window").width / 80,
    marginVertical: Dimensions.get("window").height / 80,
  },
});

export default GlobalTextInput;
