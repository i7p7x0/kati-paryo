import { CREATE_PAYERS, UPDATE_PAYERS } from "../actions/Payers";
import Payer from "../../model/Payer";

const initialState = [];

export const payersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYERS:
      state = [];
      for (let i = 1; i <= action.numberOfBillPayers; i++) {
        state.push(
          new Payer(
            i,
            "payer " + i,
            (action.billAmount / action.numberOfBillPayers).toFixed(2),
            (
              (action.billAmount /
                action.numberOfBillPayers /
                action.billAmount) *
              100
            ).toFixed(2)
          )
        );
      }
      return state;
    case UPDATE_PAYERS:
      state = action.payers;
      return state;
    default:
      return state;
  }
};
