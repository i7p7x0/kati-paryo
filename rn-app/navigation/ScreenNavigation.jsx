import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BillScreen from "../screens/BillScreen";

import PayerScreen from "../screens/PayerScreen";
import EditPayerScreen from "../screens/EditPayerScreen";
import PaymentScreen from "../screens/PaymentScreen";
import ResultScreen from "../screens/ResultScreen";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";

const ScreenNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={ScreenNavigationScreenNames.homeScreen}
          component={BillScreen}
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

export default ScreenNavigation;
