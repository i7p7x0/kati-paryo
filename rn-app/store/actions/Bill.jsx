export const ADD_BILL = "ADD_BILL";
export const REMOVE_BILL = "ADD_BILL";

export const addBill = (billAmount, numberOfBillPayers) => {
  return {
    type: ADD_BILL,
    billAmount: billAmount,
    numberOfBillPayers: numberOfBillPayers,
  };
};

export const removeBill = () => {
  return {
    type: REMOVE_BILL,
  };
};
