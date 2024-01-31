import { Component } from '@angular/core';
import { RadioBrowseApiService } from 'src/app/Services/radio-browse-api.service';

@Component({
  selector: 'app-all-card',
  templateUrl: './all-card.component.html',
  styleUrls: ['./all-card.component.css']
})
export class AllCardComponent {
   allStationData:any;
  constructor(private radioBrowserService: RadioBrowseApiService) {}
  ngOnInit() {
    this.radioBrowserService.getTopStation().subscribe({
      next: (data) => {
        this.allStationData = data;
        
      },
      error: (error) => {
        console.error('Error fetching countries', error);
      }
    });
}

 
}
