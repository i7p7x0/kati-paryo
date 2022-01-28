import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

// CUSTOM COMPONENTS

import GlobalButton from "./components/atoms/GlobalButton";
import GlobalTextInput from "./components/atoms/GlobalTextInput";
import CountryPicker from "./components/molecules/CountryPicker";
import CountryItem from "./components/atoms/CountryItem";

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <CountryPicker />
        <CountryItem/>
        <GlobalTextInput />
        <GlobalButton />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
