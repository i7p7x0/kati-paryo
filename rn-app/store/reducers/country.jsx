import { SELECT_COUNTRY } from "../actions/country";
import COUNTRIES_DATA from "../../data/countriesData";

const initialState = {
  countryList: COUNTRIES_DATA,
  selectedCountry: "Select Country",
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      state.selectedCountry = action.countryName;
      return state;
    default:
      return state;
  }
};
