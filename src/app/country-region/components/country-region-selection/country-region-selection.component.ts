import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryRegionList, CountryRegionState } from '../../state/country-region.state';
import { Observable, Subject, Subscription, catchError, takeUntil } from 'rxjs';
import { getCountry, getCountryDetails, getRegion } from '../../state/country-region.selectors';
import { countrySelection, filterCountryDetails, regionSelection } from '../../state/country-region.actions';
import { CountryDetails, CountryList } from '../../model/countryRegionDetails.model';

@Component({
  selector: 'app-country-region-selection',
  templateUrl: './country-region-selection.component.html',
  styleUrls: ['./country-region-selection.component.scss']
})
export class CountryRegionSelectionComponent implements OnInit {

  public regionList$!: Observable<CountryRegionList[]>;
  public countryList$!: Observable<any[]>;

  public countryDropDownLable: string = 'Country';
  public regionDropDownLable: string = 'Region';

    constructor(
    private store: Store<{ countryRegion: CountryRegionState }>
  ) { }

  ngOnInit(): void {
    this.regionList$ = this.store.select(getRegion);
  }

  regionSelected(selectedRegionVal: string): void {
    this.store.dispatch(regionSelection({ region: selectedRegionVal }));
    this.countryList$ = this.store.select(getCountry)
  }

  countrySelected(selectedCountry: string): void {
    this.store.dispatch(countrySelection({ selectedCountry, isCountrySelected: true }));
    this.store.dispatch(filterCountryDetails());
  }



}
