import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./AppNavigation";
import AboutNavigation from "./AboutNavigation";
import DrawerColors from "../constants/colors/DrawerColors";
import DrawerContentScreen from "../screens/DrawerContentScreen";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
const MainNavigation = (props) => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
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
          component={AppNavigation}
          DrawerContent
        />
        <Drawer.Screen
          name={ScreenNavigationScreenNames.aboutDrawer}
          component={AboutNavigation}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
