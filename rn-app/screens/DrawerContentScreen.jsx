import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import BackgroundColors from "../constants/colors/BackgroundColors";

const DrawerContentScreen = (props) => {
  return (
    <View style={styles.screen}>
      <DrawerContentScrollView>
        <DrawerItem
          label="Home"
          icon={() => {
            return (
              <View>
                <Text>Home</Text>
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
              <View>
                <Text>About</Text>
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
    alignItems: "center",
    backgroundColor: BackgroundColors.blue,
  },
});
export default DrawerContentScreen;
