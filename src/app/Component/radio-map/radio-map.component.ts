import { Component } from '@angular/core';
import * as L from 'leaflet';
import { MapApiService } from 'src/app/Services/map-api.service';


@Component({
  selector: 'app-radio-map',
  templateUrl: './radio-map.component.html',
  styleUrls: ['./radio-map.component.css']
})
export class RadioMapComponent {
  private map:any;
  stations:any;
  constructor(private mapApiService:MapApiService){}
  ngOnInit() {

    this.initMap();
  }
  private initMap(): void {
     this.loadMapData();

    this.map = L.map('map', {
      center: [ 53.128959, 23.146008 ], 
      zoom: 6
    });
  
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 4
    }).addTo(this.map);
  }
  private addMarker(lat: number, lon: number, title: string): void {
  
    const marker = L.marker([lat, lon]).addTo(this.map);
    marker.bindPopup(title);
  }
  
  private loadMapData(){
      this.mapApiService.getAllLocationData().subscribe({
        next: (data) => {
             this.stations = data;   
             this.stations.forEach((station:any) => {
              this.addMarker(station.geo_lat, station.geo_long, station.name);
            });
            
        },
        error: (error) => {
          console.error('Error fetching map data', error);
        }
      });
  }
  
  
}
