import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import BackgroundColors from "../constants/colors/BackgroundColors";
import { Entypo } from "@expo/vector-icons";

const DrawerContentScreen = (props) => {
  return (
    <View style={styles.screen}>
      <DrawerContentScrollView>
        <DrawerItem
          label="Application"
          icon={() => {
            return (
              <View style={styles.drawerItemContainer}>
                <Entypo name="home" size={24} />
              </View>
            );
          }}
          onPress={() =>
            props.navigation.navigate(
              ScreenNavigationScreenNames.applicationDrawer
            )
          }
        />
        <DrawerItem
          label="About"
          icon={() => {
            return (
              <View style={styles.drawerItemContainer}>
                <Entypo name="info-with-circle" size={24} color="black" />
              </View>
            );
          }}
          onPress={() =>
            props.navigation.navigate(ScreenNavigationScreenNames.aboutDrawer)
          }
        />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: BackgroundColors.blue,
  },
  drawerItemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DrawerContentScreen;
