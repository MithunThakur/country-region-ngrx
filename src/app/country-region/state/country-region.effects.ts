import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryRegionState } from './country-region.state';
import { Store } from '@ngrx/store';
import { CountryRegionService } from 'src/app/services/country-region.service';
import { countryDetailsFetchSuccess, regionSelection } from './country-region.actions';
import { switchMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CountryRegion {

  constructor(
    private actions$: Actions,
    private store: Store<CountryRegionState>,
    private countryRegionService: CountryRegionService
  ) { }

  regionSelection$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(regionSelection),
      switchMap((action) => {
        return this.countryRegionService.getCountryDetailsByRegionVakue(action.region)
          .pipe(
            map((data) => {
              const countryDetails: any[] = [];
              data.forEach((countryData: any) => {
                countryDetails.push({
                  name: countryData.name,
                  capital: countryData.capital,
                  population: countryData.population,
                  currencies: countryData.currencies,
                  flag: countryData.flag
                });
              });
              return countryDetailsFetchSuccess({ countryDetails: countryDetails })
            })
          )
      })
    )
  })
}
