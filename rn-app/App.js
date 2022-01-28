import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

// REDUX
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { countryReducer } from "./store/reducers/country";

// CUSTOM COMPONENTS

const rootReducer = combineReducers({
  country: countryReducer,
});

const store = createStore(rootReducer);

import GlobalButton from "./components/atoms/GlobalButton";
import GlobalTextInput from "./components/atoms/GlobalTextInput";
import CountryPicker from "./components/molecules/CountryPicker";
import CountryItem from "./components/atoms/CountryItem";

export default function App() {
  return (
    <Provider store={store}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <CountryPicker />
          <CountryItem />
          <GlobalTextInput />
          <GlobalButton />
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </Provider>
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
