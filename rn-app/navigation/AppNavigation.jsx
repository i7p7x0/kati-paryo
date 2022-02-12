import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PayerScreen from "../screens/PayerScreen";
import EditPayerScreen from "../screens/EditPayerScreen";
import PaymentScreen from "../screens/PaymentScreen";
import ResultScreen from "../screens/ResultScreen";
import ScreenNavigationScreenNames from "../constants/ScreenNavigationScreenNames";
import InformationScreen from "../screens/InformationScreen";
import DrawerNavigation from "./DrawerNavigation";
// import DrawerNavigationButton from "../components/molecules/navigation/DrawerNavigationButton";
import DrawerColors from "../constants/colors/DrawerColors";
import InformationTypes from "../constants/InformationTypes";
import InfoButton from "../components/atoms/InfoButton";

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
          options={({ navigation }) => ({
            headerRight: () => (
              <InfoButton
                handleButtonPress={() =>
                  navigation.navigate(
                    ScreenNavigationScreenNames.informationScreen,
                    { informationType: InformationTypes.PAYER_INFO }
                  )
                }
              />
            ),
          })}
        />
        <Stack.Screen
          name={ScreenNavigationScreenNames.editPayerScreen}
          component={EditPayerScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <InfoButton
                handleButtonPress={() =>
                  navigation.navigate(
                    ScreenNavigationScreenNames.informationScreen,
                    { informationType: InformationTypes.EDIT_PAYER_INFO }
                  )
                }
              />
            ),
          })}
        />
        <Stack.Screen
          name={ScreenNavigationScreenNames.paymentScreen}
          component={PaymentScreen}
        />
        <Stack.Screen
          name={ScreenNavigationScreenNames.resultScreen}
          component={ResultScreen}
        />
        <Stack.Screen
          name={ScreenNavigationScreenNames.informationScreen}
          component={InformationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
