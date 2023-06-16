import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryRegionComponent } from './country-region.component';

const routes: Routes = [
  {
    path: '',
    component: CountryRegionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRegionRoutingModule { }
