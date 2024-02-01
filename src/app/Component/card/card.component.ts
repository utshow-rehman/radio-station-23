import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlayTrackService } from 'src/app/Services/play-track.service';

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
  constructor(private playTrackService:PlayTrackService){}
  ngOnInit() {
    if (this.station && this.station.tags) {
      this.tagList = this.station.tags.split(',');
    }

  
    this.isFavorite = this.checkIsFavorite(this.station);
  }

  addFavorite(station: any) {
    this.favStation.emit(station);
    this.isFavorite = !this.isFavorite;
  }
  playTrack(station:any){
       this.playTrackService.setTrack(station.url,station.name);
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