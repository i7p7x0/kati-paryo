export const SELECT_COUNTRY = "SELECT_COUNTRY";

export const selectCountry = (countryName) => {
  return {
    type: SELECT_COUNTRY,
    countryName: countryName,
  };
};
