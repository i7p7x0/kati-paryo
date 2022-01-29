import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { billReducer } from "./store/reducers/Bill";

import BillScreen from "./screens/BillScreen";

export default function App() {
  const rootReducer = combineReducers({
    bill:billReducer,
  });
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <BillScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({});
