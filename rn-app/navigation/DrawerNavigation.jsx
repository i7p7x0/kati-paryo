import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutNavigation from "./AboutNavigation";
import DrawerColors from "../constants/colors/DrawerColors";
import DrawerContentScreen from "../screens/DrawerContentScreen";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import BillScreen from "../screens/BillScreen";

const DrawerNavigation = (props) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="App"
      backgroundColor="red"
      drawerContent={(props) => {
        return <DrawerContentScreen {...props} />;
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: DrawerColors.headerColorPrimary,
        },
        headerTintColor: DrawerColors.headerFontColorPrimary,
      }}
    >
      <Drawer.Screen
        name={ScreenNavigationScreenNames.applicationDrawer}
        component={BillScreen}
        DrawerContent
      />
      <Drawer.Screen
        name={ScreenNavigationScreenNames.aboutDrawer}
        component={AboutNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
