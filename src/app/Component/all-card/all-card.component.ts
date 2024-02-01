import { Component } from '@angular/core';
import { FilterService } from 'src/app/Services/filter.service';
import { RadioBrowseApiService } from 'src/app/Services/radio-browse-api.service';
import { FilterInterface } from 'src/app/Interfaces/FilterInterface';
@Component({
  selector: 'app-all-card',
  templateUrl: './all-card.component.html',
  styleUrls: ['./all-card.component.css'],
})
export class AllCardComponent {
  allStationData: any;
  filterValue: string = '';
  filterId: number = 0;
  constructor(
    private radioBrowserService: RadioBrowseApiService,
    private filterService: FilterService
  ) {}
  ngOnInit() {
    this.filterService.filterState.subscribe((state: FilterInterface) => {
      this.filterId = state.filterId;
      this.filterValue = state.filterValue;
      this.loadData();
    });
  }
  loadData() {
    this.radioBrowserService
      .getTopStation(this.filterValue, this.filterId)
      .subscribe({
        next: (data) => {
          this.allStationData = data;
        },
        error: (error) => {
          console.error('Error fetching countries', error);
        },
      });
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
    this.updateFavoriteStatus(station);
  }
  updateFavoriteStatus(station: any) {
    this.allStationData = this.allStationData.map((s: any) => {
      if (s.changeuuid === station.changeuuid) {
        s.isFavorite = !s.isFavorite;
      }
      return s;
    });
  }
}