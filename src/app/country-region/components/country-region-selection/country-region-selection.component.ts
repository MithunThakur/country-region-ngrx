import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryRegionState } from '../../state/country-region.state';
import { Observable, Subject, Subscription, catchError, takeUntil } from 'rxjs';
import { getRegion } from '../../state/country-region.selectors';
import { regionSelection } from '../../state/country-region.actions';

@Component({
  selector: 'app-country-region-selection',
  templateUrl: './country-region-selection.component.html',
  styleUrls: ['./country-region-selection.component.scss']
})
export class CountryRegionSelectionComponent implements OnInit {

  public regionList$!: Observable<string[]>;
  public countrylist$!: Observable<string[]>;

    constructor(
    private store: Store<{ countryRegion: CountryRegionState }>
  ) { }

  ngOnInit(): void {
    this.regionList$ = this.store.select(getRegion);

  }

  regionSelected(selectedRegionVal: string): void {
    this.store.dispatch(regionSelection({ region: selectedRegionVal }));
  }



}
