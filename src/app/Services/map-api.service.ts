import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapApiService {
  private mapGeoLocation: string = 'https://de1.api.radio-browser.info/json/stations/search?has_geo_info=true&limit=500&hidebroken=true';
  constructor(private http: HttpClient) {}


  getAllLocationData(){
    return this.http.get<any[]>(this.mapGeoLocation);
  }
}
