import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() station: any;
  @Output() favStation: EventEmitter<any> = new EventEmitter<any>();
  tagList: string[] = [];
  isFavorite: boolean = false; 

  ngOnInit() {
    if (this.station && this.station.tags) {
      this.tagList = this.station.tags.split(',');
    }

  
    this.isFavorite = this.checkIsFavorite(this.station);
  }

  addFavorite(station: any) {
    console.log(station, 'station');
    this.favStation.emit(station);
    this.isFavorite = !this.isFavorite;
  }

  checkIsFavorite(station: any): boolean {
    let favStations: any[] = JSON.parse(
      localStorage.getItem('favStations') || '[]'
    );
    return favStations.some(
      (favStation) => favStation.changeuuid === station.changeuuid
    );
  }
}