import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DrawerNavigationButton = (props) => {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(props.navigation);
      }}
    >
      <View>
        <Ionicons name="list" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default DrawerNavigationButton;
