import { createReducer, on } from "@ngrx/store";
import { initialState } from './country-region.state';
import { countryDetailsFetchSuccess, countrySelection, regionSelection } from "./country-region.actions";
import { CountryDetails } from "../model/countryRegionDetails.model";

export const countryRegionReducer = createReducer(
    initialState,
    on(countrySelection, (state, action) => {
        return {
            ...state,
            countryDetails: state.countryDetails.filter((countryData: CountryDetails) => countryData.name === action.country)
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
            countryDetails: action.countryDetails
        }
    })
)