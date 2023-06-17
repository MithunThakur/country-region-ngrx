import { State, createReducer, on } from "@ngrx/store";
import { initialState } from './country-region.state';
import { countryDetailsFetchSuccess, countrySelection, filterCountryDetails, regionSelection } from "./country-region.actions";
import { CountryDetails } from "../model/countryRegionDetails.model";

export const countryRegionReducer = createReducer(
    initialState,
    on(countrySelection, (state, action) => {
        return {
            ...state,
            isCountrySelected: action.isCountrySelected,
            selectedCountry: action.selectedCountry,
        }
    }),
    on(filterCountryDetails, (state) => {
        return {
            ...state,
            selectedCountryDetails: state.countryDetails.filter((details: CountryDetails) => details.name === state.selectedCountry)[0]
        }
    }),
    on(regionSelection, (state, action) => {
        return {
            ...state,
            selectedRegion: action.region
        }
    }),
    on(countryDetailsFetchSuccess, (state, action) => {
        return {
            ...state,
            countryList: action.countryList,
            countryDetails: action.countryDetails
        }
    })
)