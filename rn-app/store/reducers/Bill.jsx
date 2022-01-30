import { ADD_BILL } from "../actions/Bill";

const initialState = {
  billAmount: "",
  numberOfBillPayers: "",
};

export const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BILL:
      state = initialState;
      state.billAmount = action.billAmount;
      state.numberOfBillPayers = action.numberOfBillPayers;

      return state;
    default:
      return state;
  }
};
