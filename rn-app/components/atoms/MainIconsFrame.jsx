import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import IconsColors from "../../constants/colors/IconsColors";
import BackgroundColors from "../../constants/colors/BackgroundColors";

const MainIconsFrame = (props) => {
  return (
    <View style={styles.iconsContainer}>
      <View style={styles.iconsContainerChild}>
        <FontAwesome5
          name="money-bill-alt"
          size={Dimensions.get("window").width / 9}
          color={IconsColors.primary}
        />
        <MaterialIcons
          name="calculate"
          size={Dimensions.get("window").width / 9}
          color={IconsColors.quaternary}
        />
      </View>
      <View style={styles.iconsContainerChild}>
        <FontAwesome
          name="check-square-o"
          size={Dimensions.get("window").width / 9}
          color={IconsColors.tertiary}
        />
        <FontAwesome
          name="handshake-o"
          size={Dimensions.get("window").width / 9}
          color={IconsColors.secondary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    backgroundColor: BackgroundColors.dark,
    paddingHorizontal: Dimensions.get("window").width / 40,
    paddingVertical: Dimensions.get("window").height / 70,
    borderRadius: 8,
  },
  iconsContainerChild: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
});

export default MainIconsFrame;
