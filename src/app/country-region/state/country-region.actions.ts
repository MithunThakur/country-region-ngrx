import { createAction, props } from "@ngrx/store";
import { CountryDetails, countryList } from "../model/countryRegionDetails.model";

export const countrySelection = createAction(
    '[Country Region Selection] selectCountry',
    props<{country: string}>()
);

export const regionSelection = createAction(
    '[Country Region Selection] selectRegion',
    props<{region: string}>()
);

export const countryDetailsFetchSuccess = createAction(
    '[Country Region Details] countryDetails',
    props<{countryDetails: CountryDetails[], countryList: countryList[]}>()
)
