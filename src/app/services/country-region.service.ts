import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryRegionService {

  constructor(
    private http: HttpClient
  ) { }

  getCountryDetailsByRegionVakue(region: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v2/region/${region}`);
  }
}
