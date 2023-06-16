import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryRegionState } from './country-region.state';
import { Store } from '@ngrx/store';
import { CountryRegionService } from 'src/app/services/country-region.service';
import { countrySelection } from './country-region.actions';

@Injectable()
export class CountryRegion {

    constructor(
        private actions$: Actions,
        private store: Store<CountryRegionState>,
        private countryRegionService: CountryRegionService
    ) {}

    // regionSelection$ = createEffect(() => {
    //     this.actions$.pipe(
    //         ofType(countrySelection)
    //     )
    // })
}