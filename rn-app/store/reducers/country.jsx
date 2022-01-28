import { FILTER_COUNTRY, SELECT_COUNTRY } from "../actions/country";
import COUNTRIES_DATA from "../../data/countriesData";

const initialState = {
  countryList: COUNTRIES_DATA,
  filteredCountries: COUNTRIES_DATA,
  selectedCountry: {
    countryName: "",
    currencyCode: "",
  },
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      state.selectedCountry = {
        countryName: action.countryName,
        currencyCode: action.currencyCode,
      };
      return state;
    case FILTER_COUNTRY:
      const filteredCountries = state.countryList.filter((country) =>
        country.countryName
          .toLowerCase()
          .startsWith(action.countryName.toLowerCase())
      );
      state.filteredCountries = filteredCountries;
      return state;
    default:
      return state;
  }
};
