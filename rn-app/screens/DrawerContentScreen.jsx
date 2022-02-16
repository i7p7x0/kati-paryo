import React from "react";
import { View, Text, Dimensions,StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import BackgroundColors from "../constants/colors/BackgroundColors";
import { Entypo } from "@expo/vector-icons";

const DrawerContentScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Kati Paryo?</Text>
      </View>
      <DrawerContentScrollView>
        <DrawerItem
          label="Home"
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
    justifyContent: "flex-start",
    paddingVertical: "20%",
    backgroundColor: BackgroundColors.blue,
  },
  drawerItemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: Dimensions.get("window").width / 17,
    fontWeight: "bold",
  },
});
export default DrawerContentScreen;
