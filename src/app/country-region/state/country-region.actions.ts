import { createAction, props } from "@ngrx/store";

export const countrySelection = createAction(
    '[Country Region Selection] selectCountry',
    props<{country: string}>()
);

export const regionSelection = createAction(
    '[Country Region Selection] selectRegion',
    props<{region: string}>()
);
