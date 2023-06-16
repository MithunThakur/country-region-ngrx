import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class CountryRegionSelectionComponent implements OnInit, OnDestroy {

  public regionList: any[] = [];
  public regionValue: string = '';

  private regionListSubscription: Subject<boolean> = new Subject<boolean>();

  constructor(
    private store: Store<{ countryRegion: CountryRegionState }>
  ) { }

  ngOnInit(): void {
    this.store.select(getRegion)
      .pipe(
        takeUntil(this.regionListSubscription)
      )
      .subscribe((data: string[]) => {
        data.forEach((region: string) => {
          this.regionList.push({
            name: region,
            value: region
          })
        })
      });

  }

  regionSelected(): void {
    this.store.dispatch(regionSelection({ region: this.regionValue }))
  }

  ngOnDestroy(): void {
    this.regionListSubscription.next(true);
    this.regionListSubscription.complete();
  }

}
