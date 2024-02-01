import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite-station',
  templateUrl: './favourite-station.component.html',
  styleUrls: ['./favourite-station.component.css'],
})
export class FavouriteStationComponent {
  favStations: any[] = [];
  ngOnInit() {
    this.favStations = JSON.parse(localStorage.getItem('favStations') || '[]');
    console.log(this.favStations, 'fav stations');
  }
  handleFavStation(station: any) {
    console.log('Favorite Station:', station);

    let favStations: any[] = JSON.parse(
      localStorage.getItem('favStations') || '[]'
    );

    const existingIndex = favStations.findIndex(
      (favStation) => favStation.changeuuid === station.changeuuid
    );

    if (existingIndex !== -1) {
      favStations.splice(existingIndex, 1);
    } else {
      favStations.push(station);
    }

    localStorage.setItem('favStations', JSON.stringify(favStations));

    console.log(favStations, 'fav stations');
    this.ngOnInit();
    this.updateFavoriteStatus(station);
  }
  updateFavoriteStatus(station: any) {
    this.favStations = this.favStations.map((s: any) => {
      if (s.changeuuid === station.changeuuid) {
        s.isFavorite = !s.isFavorite;
      }
      return s;
    });
  }
}