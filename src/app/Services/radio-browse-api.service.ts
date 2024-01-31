import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RadioBrowseApiService {

  private apiUrl: string = 'https://de1.api.radio-browser.info/json/countries';

  constructor(private http: HttpClient) {}


getCountries(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl).pipe(
    map((countries) => countries.map((country) => ({
      ...country
    })))
 
    
  );
}



}
