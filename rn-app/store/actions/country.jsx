export const SELECT_COUNTRY = "SELECT_COUNTRY";
export const FILTER_COUNTRY = "FILTER_COUNTRY";

export const selectCountry = (countryName, currencyCode) => {
  return {
    type: SELECT_COUNTRY,
    countryName: countryName,
    currencyCode: currencyCode,
  };
};

export const filterCountry = (countryName) => {
  return {
    type: FILTER_COUNTRY,
    countryName: countryName,
  };
};
