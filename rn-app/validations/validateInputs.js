export const acceptOnlyNumbers = (inputString) => {
  return inputString.replace(/[^\d.-]/g, "");
};

export const acceptOnlyAlphabets = (inputString) => {
  return inputString.replace(/[^a-zA-Z]/g, "");
};

export const checkValidName = (inputText) => {
  return inputText.length > 0 && inputText.length <= 10;
};

export const checkValidAmount = (inputText) => {
  return parseFloat(inputText.match(/^-?\d*(\.\d+)?$/)) > 0;
};

export const checkValidNumberOfPayers = (inputText) => {
  return /^\d+$/.test(inputText);
};

export const validatePayer = (payer) => {
  if (
    // payer.payerName.length > 2 &&
    // payer.payerName.length <= 10 &&
    parseFloat(payer.payerAmount.match(/^-?\d*(\.\d+)?$/)) > 0 &&
    parseFloat(payer.payerPayingPercent.match(/^-?\d*(\.\d+)?$/)) > 0
    //  && parseFloat(payer.payerId.match(/^-?\d*(\.\d+)?$/)) > 0
  ) {
    return true;
  } else {
    return false;
  }
};
