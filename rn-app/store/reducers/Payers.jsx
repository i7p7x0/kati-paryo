import {
  CREATE_PAYERS,
  UPDATE_PAYERS,
  ROUND_BILL,
  REMOVE_PAYER,
} from "../actions/Payers";
import Payer from "../../model/Payer";
import * as validationInputs from "../../validations/validateInputs";
const supervillains = require("supervillains");

const initialState = [];

export const payersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYERS:
      state = [];
      for (let i = 1; i <= action.numberOfBillPayers; i++) {
        let newPayer = new Payer(
          i,
          supervillains.random(),
          (action.billAmount / action.numberOfBillPayers).toFixed(2),
          (
            (action.billAmount /
              action.numberOfBillPayers /
              action.billAmount) *
            100
          ).toFixed(2)
        );
        if (!validationInputs.validatePayer(newPayer)) {
          state = [];
          return state;
        }

        state.push(newPayer);
      }
      return state;
    case UPDATE_PAYERS:
      state = action.payers;
      return state;
    case ROUND_BILL:
      state = [];
      let leftOvers = 0;
      let newBill = [];
      for (let i = 0; i < action.payers.length - 1; i++) {
        let roundAmount = Math.round(action.payers[i].payerAmount);
        while (roundAmount % 5 !== 0) {
          roundAmount = roundAmount - 1;
        }
        leftOvers = leftOvers + roundAmount;
        newBill.push(
          new Payer(
            action.payers[i].payerId,
            action.payers[i].payerName,
            roundAmount,
            ((roundAmount / action.total) * 100).toFixed(2)
          )
        );
      }

      newBill.push(
        new Payer(
          action.payers[action.payers.length - 1].payerId,
          action.payers[action.payers.length - 1].payerName,
          action.total - leftOvers,
          (((action.total - leftOvers) / action.total) * 100).toFixed(2)
        )
      );
      state = newBill;
      return state;
    case REMOVE_PAYER:
      state = [];
      return state;
    default:
      return state;
  }
};
