import { createAction, props } from "@ngrx/store";
import { CountryDetails, CountryList } from "../model/countryRegionDetails.model";

export const countrySelection = createAction(
    '[Country Region Selection] selectCountry',
    props<{country: string, isCountrySelected: boolean}>()
);

export const regionSelection = createAction(
    '[Country Region Selection] selectRegion',
    props<{region: string}>()
);

export const countryDetailsFetchSuccess = createAction(
    '[Country Region Details] countryDetails & CountryList',
    props<{countryDetails: CountryDetails[], countryList: CountryList[]}>()
)
