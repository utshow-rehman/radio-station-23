import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RadioBrowseApiService {
  private apiUrl:string = "";
  private filterApiUrl:string = "";
  private countryApiUrl: string = 'http://de1.api.radio-browser.info/json/countries';
  private languageApiUrl:string = 'http://de1.api.radio-browser.info/json/languages?hidebroken=true&limit=100&reverse=true&order=stationcount'; 
  private topRadioStationApi:string = 'https://de1.api.radio-browser.info/json/stations/topvote/100';
  private filterByCounteryCode:string = 'https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/__?limit=100'; 
  private filterByLanguage:string = 'https://de1.api.radio-browser.info/json/stations/bylanguage/__?limit=100'; 
  private filterByStationName:string = 'https://de1.api.radio-browser.info/json/stations/search?name=';
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

getTopStation(filterValue:string,filterId:number): Observable<any[]> { 
        if(filterId === 0){
          this.filterApiUrl = this.topRadioStationApi;
        }
       else if(filterId === 1){
          this.filterApiUrl = this.filterByCounteryCode.replace('__', filterValue);
        }
       else if(filterId === 2){
          this.filterApiUrl = this.filterByLanguage.replace('__', filterValue);
        }
      else if(filterId === 3){
            this.filterApiUrl = this.filterByStationName+""+filterValue;
      }
  
    
return this.http.get<any[]>(this.filterApiUrl);
}



}
