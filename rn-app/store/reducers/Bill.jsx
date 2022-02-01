import { ADD_BILL } from "../actions/Bill";
import * as validationInputs from "../../validations/validateInputs";

const initialState = {
  billAmount: "",
  numberOfBillPayers: "",
};

export const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BILL:
      state = initialState;

      if (
        !validationInputs.checkValidAmount(action.billAmount) ||
        !validationInputs.checkValidNumberOfPayers(action.numberOfBillPayers)
      ) {
        return state;
      }
      state.billAmount = action.billAmount;
      state.numberOfBillPayers = action.numberOfBillPayers;

      return state;
    default:
      return state;
  }
};
