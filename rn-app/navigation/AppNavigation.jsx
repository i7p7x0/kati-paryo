import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BillScreen from "../screens/BillScreen";

import PayerScreen from "../screens/PayerScreen";
import EditPayerScreen from "../screens/EditPayerScreen";
import PaymentScreen from "../screens/PaymentScreen";
import ResultScreen from "../screens/ResultScreen";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
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
  );
};

export default AppNavigation;
