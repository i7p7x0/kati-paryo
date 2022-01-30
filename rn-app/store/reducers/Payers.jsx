import { CREATE_PAYERS } from "../actions/Payers";

const initialState = [];

export const payersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYERS:
      console.log(reached);
      return state;
    default:
      return state;
  }
};
