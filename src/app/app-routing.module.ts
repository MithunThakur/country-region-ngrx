import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'countryRegion',
    loadChildren: () =>
      import('./country-region/country-region.module').then((m) => m.CountryRegionModule),
  },
  {
    path: '',
    redirectTo: 'countryRegion',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
