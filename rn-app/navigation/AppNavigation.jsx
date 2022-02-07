import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PayerScreen from "../screens/PayerScreen";
import EditPayerScreen from "../screens/EditPayerScreen";
import PaymentScreen from "../screens/PaymentScreen";
import ResultScreen from "../screens/ResultScreen";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import DrawerNavigation from "./DrawerNavigation";
// import DrawerNavigationButton from "../components/molecules/navigation/DrawerNavigationButton";
import DrawerColors from "../constants/colors/DrawerColors";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: DrawerColors.headerColorPrimary,
          },
          headerTintColor: DrawerColors.headerFontColorPrimary,
        }}
      >
        <Stack.Screen
          name={ScreenNavigationScreenNames.homeScreen}
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNavigationScreenNames.payerScreen}
          component={PayerScreen}
        />
        <Stack.Screen
          name={ScreenNavigationScreenNames.editPayerScreen}
          component={EditPayerScreen}
        />
        <Stack.Screen
          name={ScreenNavigationScreenNames.paymentScreen}
          component={PaymentScreen}
        />
        <Stack.Screen
          name={ScreenNavigationScreenNames.resultScreen}
          component={ResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
