export const CREATE_PAYERS = "CREATE_PAYERS";

export const createPayers = (billAmount, numberOfBillPayers) => {
  return {
    type: CREATE_PAYERS,
    billAmount: billAmount,
    numberOfBillPayers: numberOfBillPayers,
  };
};
