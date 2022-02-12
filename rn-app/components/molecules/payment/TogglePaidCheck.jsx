import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// CUSTOM COMPONENTS

const TogglePaidCheck = (props) => {
  const [isPaid, setIsPaid] = useState(false);

  const handleMarkPress = () => {
    props.toggleMain ? props.handleMarkPress() : setIsPaid(!isPaid);
  };

  return (
    <TouchableOpacity onPress={handleMarkPress}>
      <View style={styles.container}>
        <Text>
          <Ionicons
            name="checkbox"
            size={32}
            color={props.markAllAsPaidState || isPaid ? "green" : "red"}
          />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TogglePaidCheck;
