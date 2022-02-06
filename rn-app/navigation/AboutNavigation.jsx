import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../screens/AboutScreen";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";

const AboutNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ScreenNavigationScreenNames.aboutScreen}
        component={AboutScreen}
      />
    </Stack.Navigator>
  );
};

export default AboutNavigation;
