import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryRegionState } from './country-region.state';

const getCountryRegion = createFeatureSelector<CountryRegionState>('countryRegion');

export const getCountry = createSelector(getCountryRegion, (state) => {
    return state.country;
});

export const getRegion = createSelector(getCountryRegion, (state) => {
    return state.region;
});

export const getCountryDetails = createSelector(getCountryRegion, (state) => {
    return state.countryDetails;
});