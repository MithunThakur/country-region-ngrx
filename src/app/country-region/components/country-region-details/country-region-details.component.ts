import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryRegionState } from '../../state/country-region.state';
import { getCountryDetails } from '../../state/country-region.selectors';
import { Observable } from 'rxjs';
import { CountryDetails } from '../../model/countryRegionDetails.model';

@Component({
  selector: 'app-country-region-details',
  templateUrl: './country-region-details.component.html',
  styleUrls: ['./country-region-details.component.scss']
})
export class CountryRegionDetailsComponent implements OnInit {

  public countryDetails$!: Observable<CountryDetails[]>;

  constructor(
    private store: Store<{ countryDetails: CountryRegionState }>
  ) { }

  ngOnInit(): void {
    this.countryDetails$ = this.store.select(getCountryDetails);
  }

}
