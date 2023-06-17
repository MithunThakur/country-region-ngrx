import { createAction, props } from "@ngrx/store";
import { CountryDetails, CountryList } from "../model/countryRegionDetails.model";

export const countrySelection = createAction(
    '[Country Region Selection] selectCountry',
    props<{selectedCountry: string, isCountrySelected: boolean}>()
);

export const filterCountryDetails = createAction(
    '[Country Details] filterCountryDetails',
    props<{selectedCountryDetails: CountryDetails}>
)

export const regionSelection = createAction(
    '[Country Region Selection] selectRegion',
    props<{region: string}>()
);

export const countryDetailsFetchSuccess = createAction(
    '[Country Region Details] countryDetails & CountryList',
    props<{countryDetails: CountryDetails[], countryList: CountryList[]}>()
)
