import { CREATE_PAYERS } from "../actions/Payers";
import Payer from "../../model/Payer";

const initialState = [];

export const payersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYERS:
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
      console.log(state);
      return state;
    default:
      return state;
  }
};
