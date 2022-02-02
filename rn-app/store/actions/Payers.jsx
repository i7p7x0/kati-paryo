export const CREATE_PAYERS = "CREATE_PAYERS";
export const UPDATE_PAYERS = "UPDATE_PAYERS";
export const ROUND_BILL = "ROUND_BILLS";
export const REMOVE_PAYER = "REMOVE_PAYER";

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

export const removePayer=()=>{
  return {
    type:REMOVE_PAYER
  }
}