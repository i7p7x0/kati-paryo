import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import LabelColors from "../../constants/colors/LabelColors";
import { Ionicons } from "@expo/vector-icons";

const GlobalWarning = (props) => {
  return (
    <View style={styles.screen}>
      <View>
        <Text>
          <Ionicons name="warning" size={40} color={LabelColors.labelRed} />
        </Text>
      </View>
      <View>
        <Text style={styles.text}>{props.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: LabelColors.labelBlack,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Dimensions.get("window").height / 40,
    paddingHorizontal: Dimensions.get("window").width / 40,
    borderRadius: 8,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: Dimensions.get("window").width / 22,
  },
});

export default GlobalWarning;
