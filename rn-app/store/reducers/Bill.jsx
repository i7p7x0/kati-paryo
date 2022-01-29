import { ADD_BILL } from "../actions/Bill";

const initialState = {
  billAmount: "",
  numberOfBillPayers: "",
};

export const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BILL:
      state.billAmount = action.billAmount;
      state.numberOfBillPayers = action.numberOfBillPayers;
      console.log(state);
      return state;
    default:
      return state;
  }
};
