import { createReducer, on } from "@ngrx/store";
import { initialState } from './country-region.state';
import { countrySelection, regionSelection } from "./country-region.actions";

export const countryRegionReducer = createReducer(
    initialState,
    on(countrySelection, (state, action) => {
        return {
            ...state,
            country: 'XYZ'
        }
    }),
    on(regionSelection, (state, action) => {
        console.log(action);
        return {
            ...state
        }
    })
)