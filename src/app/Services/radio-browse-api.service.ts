import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RadioBrowseApiService {
  private apiUrl:string = "";
  private countryApiUrl: string = 'http://de1.api.radio-browser.info/json/countries';
  private languageApiUrl:string = 'http://de1.api.radio-browser.info/json/languages?hidebroken=true&limit=100&reverse=true&order=stationcount'; 
  private topRadioStationApi:string = 'https://de1.api.radio-browser.info/json/stations/topvote/100';

  constructor(private http: HttpClient) {}


getCountries(id:number): Observable<any[]> { 
     if(id === 1){
       this.apiUrl = this.countryApiUrl;
   } 
  else if(id === 2){
    this.apiUrl = this.languageApiUrl;
} 
else if(id === 3){
  this.apiUrl = this.countryApiUrl;
} 
  
  return this.http.get<any[]>(this.apiUrl);
}

getTopStation(): Observable<any[]> { 

return this.http.get<any[]>(this.topRadioStationApi);
}



}
