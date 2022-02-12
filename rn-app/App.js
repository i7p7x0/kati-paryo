import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { billReducer } from "./store/reducers/Bill";
import { payersReducer } from "./store/reducers/Payers";

import AppNavigation from "./navigation/AppNavigation";
import "react-native-gesture-handler";
// TEMP

import PaymentScreen from "./screens/PaymentScreen";

export default function App() {
  const rootReducer = combineReducers({
    bill: billReducer,
    payers: payersReducer,
  });
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});
