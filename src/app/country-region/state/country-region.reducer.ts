import { State, createReducer, on } from "@ngrx/store";
import { initialState } from './country-region.state';
import { countryDetailsFetchSuccess, countrySelection, regionSelection } from "./country-region.actions";

export const countryRegionReducer = createReducer(
    initialState,
    on(countrySelection, (state, action) => {
        return {
            ...state,
            isCountrySelected: action.isCountrySelected,
            country: action.country
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