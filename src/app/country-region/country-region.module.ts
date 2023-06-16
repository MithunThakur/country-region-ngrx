import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRegionRoutingModule } from './country-region-routing.module';
import { CountryRegionComponent } from './country-region.component';
import { CountryRegionSelectionComponent } from './components/country-region-selection/country-region-selection.component';
import { CountryRegionDetailsComponent } from './components/country-region-details/country-region-details.component';


@NgModule({
  declarations: [
    CountryRegionComponent,
    CountryRegionSelectionComponent,
    CountryRegionDetailsComponent
  ],
  imports: [
    CommonModule,
    CountryRegionRoutingModule
  ]
})
export class CountryRegionModule { }
