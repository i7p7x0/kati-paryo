export const CREATE_PAYERS = "CREATE_PAYERS";
export const UPDATE_PAYERS = "UPDATE_PAYERS";
export const ROUND_BILL = "ROUND_BILLS";

export const createPayers = (billAmount, numberOfBillPayers) => {
  return {
    type: CREATE_PAYERS,
    billAmount: billAmount,
    numberOfBillPayers: numberOfBillPayers,
  };
};

export const updatePayers = (payers) => {
  return {
    type: UPDATE_PAYERS,
    payers: payers,
  };
};

export const roundBill = (payers, total) => {
  return {
    type: ROUND_BILL,
    payers: payers,
    total: total,
  };
};
