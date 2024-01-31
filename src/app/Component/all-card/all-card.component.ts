import { Component } from '@angular/core';
import { FilterService } from 'src/app/Services/filter.service';
import { RadioBrowseApiService } from 'src/app/Services/radio-browse-api.service';
import { FilterInterface } from 'src/app/Interfaces/FilterInterface';
@Component({
  selector: 'app-all-card',
  templateUrl: './all-card.component.html',
  styleUrls: ['./all-card.component.css']
})
export class AllCardComponent {
   allStationData:any;
   filterValue:string = ""; 
   filterId:number = 0;
  constructor(private radioBrowserService: RadioBrowseApiService,private filterService:FilterService) {}
  ngOnInit() {
    
    this.filterService.filterState.subscribe((state: FilterInterface) => {
              this.filterId = state.filterId;
              this.filterValue = state.filterValue;
            this.loadData();
    });
    

  
}
loadData(){
  this.radioBrowserService.getTopStation(this.filterValue,this.filterId).subscribe({
    next: (data) => {
      this.allStationData = data;
      
    },
    error: (error) => {
      console.error('Error fetching countries', error);
    }
  }); 
}
 
}
